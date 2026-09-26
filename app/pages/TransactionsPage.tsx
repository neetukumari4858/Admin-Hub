"use client";

import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */

import { Badge, DataTable, Pagination } from "../components/shared";
import Metric from "../components/MetricCard";
import { transactions } from "../data/records";
import { downloadCsv } from "../lib/csv";
import { useMemo, useState } from "react";
import TransactionFilters from "../components/filters/TransactionFilters";

type Props = {
  search: string;
  onSearch: (value: string) => void;
  page: number;
  setPage: (page: number) => void;
  onDetail: (id: string) => void;
  avatarSources: string[];
};

const headings = [
  "Transaction ID",
  "User",
  "Type",
  "Amount",
  "Status",
  "Date & Time",
  "Actions",
];
const latestTransactionDate = Math.max(
  ...transactions.map((row) => new Date(row[5]).getTime()),
);

export default function TransactionsPage({
  search,
  onSearch,
  page,
  setPage,
  onDetail,
  avatarSources,
}: Props) {
  const [date, setDate] = useState("30");
  const [type, setType] = useState("all");
  const [amount, setAmount] = useState("all");
  const filtered = useMemo(
    () =>
      transactions.filter((row) => {
        const matchesSearch = row
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesType = type === "all" || row[2] === type;
        const numericAmount = Math.abs(Number(row[3].replace(/[$,]/g, "")));
        const matchesAmount =
          amount === "all" ||
          (amount === "under100" ? numericAmount < 100 : numericAmount >= 100);
        const daysOld = Math.floor(
          (latestTransactionDate - new Date(row[5]).getTime()) / 86400000,
        );
        const matchesDate = date === "all" || daysOld < Number(date);
        return matchesSearch && matchesType && matchesAmount && matchesDate;
      }),
    [search, date, type, amount],
  );
  const rows = filtered.slice((page - 1) * 8, page * 8);

  return (
    <>
      <div className={cx("transaction-page-heading")}>
        <div>
          <h1>Transaction History</h1>
          <p>Monitor and manage all corporate financial transactions</p>
        </div>
        <button
          className={cx("secondary export-button")}
          onClick={() =>
            downloadCsv("transactions.csv", headings.slice(0, -1), transactions)
          }
        >
          <img src="/download.png" alt="download" /> Export CSV
        </button>
      </div>
      <div className={`${cx("metrics-grid")} metrics-grid`}>
        <Metric
          label="Total Transactions"
          value="24,891"
          change=""
          icon=""
          hideChange
          hideIcon
        />
        <Metric
          label="Total Volume"
          value="$1,202,821"
          change=""
          icon=""
          hideChange
          hideIcon
        />
        <Metric
          label="Avg. Transaction"
          value="$48.20"
          change=""
          icon=""
          hideChange
          hideIcon
        />
        <div className={`${cx("transaction-success")} transaction-success`}>
          <Metric
            label="Success Rate"
            value="96.8%"
            change=""
            icon=""
            hideChange
            hideIcon
          />
          <svg
            viewBox="0 0 48 22"
            role="img"
            aria-label="Success rate trending up"
          >
            <polyline points="1,18 11,10 21,14 31,5 41,9 47,1" />
          </svg>
        </div>
      </div>
      <article
        className={`${cx("card table-card directory-card")} directory-card`}
      >
        <div
          className={`${cx("toolbar transaction-toolbar")} transaction-toolbar`}
        >
          <TransactionFilters
            search={search}
            onSearch={onSearch}
            date={date}
            onDate={setDate}
            type={type}
            onType={setType}
            amount={amount}
            onAmount={setAmount}
            onChange={() => setPage(1)}
          />
          <button
            className={cx("hidden")}
            onClick={() =>
              downloadCsv(
                "transactions.csv",
                headings.slice(0, -1),
                transactions,
              )
            }
          >
            <img src="/download.png" alt="download" /> Export CSV
          </button>
        </div>
        <div className={cx("transaction-desktop-table")}>
          <DataTable
            avatarSources={avatarSources}
            rows={rows}
            headings={headings}
            onRow={onDetail}
          />
        </div>
        <div
          className={`${cx("mobile-transaction-list")} mobile-transaction-list`}
        >
          {rows.map((row, index) => (
            <button
              className={cx("mobile-transaction-card mobile-structured-card")}
              key={row[0]}
              onClick={() => onDetail(row[0])}
            >
              <span className={cx("mobile-listing-top")}>
                <b>{row[0]}</b>
                <Badge>{row[4]}</Badge>
              </span>
              <span className={cx("mobile-listing-divider")} />
              <span className={cx("mobile-listing-body")}>
                {avatarSources.length > 0 ? (
                  <span className={cx("mobile-avatar-wrap")}>
                    <span className={cx("mobile-record-avatar")}>
                      {row[1]
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <img
                      className={cx("mobile-record-avatar mobile-avatar-image")}
                      src={avatarSources[index % avatarSources.length]}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </span>
                ) : (
                  <span className={cx("mobile-record-avatar")}>
                    {row[1]
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
                <span className={cx("mobile-record-main")}>
                  <b>{row[1]}</b>
                  <small>{row[5]}</small>
                </span>
                <span className={cx("mobile-record-end")}>
                  <b
                    className={cx(
                      row[3].startsWith("-")
                        ? "amount-negative"
                        : "amount-value",
                    )}
                  >
                    {row[3]}
                  </b>
                  <Badge>{row[2]}</Badge>
                  <span
                    className={cx("mobile-transaction-dot")}
                    aria-hidden="true"
                  >
                    ●
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          pages={Math.max(1, Math.ceil(filtered.length / 8))}
        />
      </article>
    </>
  );
}
