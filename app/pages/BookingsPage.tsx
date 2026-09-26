"use client";

import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */

import { Badge, DataTable, Pagination } from "../components/shared";
import Metric from "../components/MetricCard";
import { bookings } from "../data/records";
import { downloadCsv } from "../lib/csv";
import { useMemo, useState } from "react";
import BookingFilters from "../components/filters/BookingFilters";

type Props = {
  search: string;
  onSearch: (value: string) => void;
  page: number;
  setPage: (page: number) => void;
  onDetail: (id: string) => void;
  avatarSources: string[];
};

const headings = [
  "Booking ID",
  "Customer",
  "Service",
  "Date & Time",
  "Duration",
  "Status",
  "Amount",
  "Actions",
];

export default function BookingsPage({
  search,
  onSearch,
  page,
  setPage,
  onDetail,
  avatarSources,
}: Props) {
  const [date, setDate] = useState("all");
  const [status, setStatus] = useState("all");
  const [service, setService] = useState("all");
  const filtered = useMemo(
    () =>
      bookings.filter((row) => {
        const dateString =
          row[3].match(/^[A-Za-z]{3} \d{1,2}, \d{4}/)?.[0] ?? "";
        const daysUntil = Math.round(
          (new Date(dateString).getTime() - new Date("2024-10-15").getTime()) /
            86400000,
        );
        return (
          row.join(" ").toLowerCase().includes(search.toLowerCase()) &&
          (status === "all" || row[5] === status) &&
          (service === "all" || row[2] === service) &&
          (date === "all" || Math.abs(daysUntil) <= Number(date))
        );
      }),
    [search, date, status, service],
  );
  const rows = filtered.slice((page - 1) * 8, page * 8);

  return (
    <>
      <div className={`${cx("metrics-grid")} metrics-grid`}>
        <Metric
          label="Total Bookings"
          value="3,456"
          change="8.4%"
          icon="/vector.png"
        />
        <Metric
          label="Active Bookings"
          value="1,234"
          change="3.1%"
          icon="/vector.png"
          negative
        />
        <Metric
          label="Completed Bookings"
          value="2,089"
          change="12.1%"
          icon="/vector.png"
        />
        <Metric
          label="Cancelled Bookings"
          value="133"
          change="1.4%"
          icon="/vector.png"
        />
      </div>
      <button
        className={`${cx("primary mobile-page-action")} mobile-page-action`}
        type="button"
      >
        + Create New Booking
      </button>
      <article
        className={`${cx("card table-card directory-card")} directory-card`}
      >
        <div
          className={`${cx("toolbar booking-toolbar booking-toolbar-hook")} booking-toolbar`}
        >
          <BookingFilters
            search={search}
            onSearch={onSearch}
            date={date}
            onDate={setDate}
            status={status}
            onStatus={setStatus}
            service={service}
            onService={setService}
            onChange={() => setPage(1)}
          />
          <button
            className={cx("secondary export-button booking-export-button")}
            onClick={() =>
              downloadCsv("bookings.csv", headings.slice(0, -1), bookings)
            }
          >
            <img src="/download.png" alt="download" /> Export List
          </button>
        </div>
        <div className={cx("booking-desktop-table")}>
          <DataTable
            avatarSources={avatarSources}
            rows={rows}
            headings={headings}
            onRow={onDetail}
            showEditAction
          />
        </div>
        <div className={`${cx("mobile-booking-list")} mobile-booking-list`}>
          {rows.map((row, index) => (
            <button
              className={cx("mobile-booking-card mobile-structured-card")}
              key={row[0]}
              onClick={() => onDetail(row[0])}
            >
              <span className={cx("mobile-listing-top")}>
                <b>{row[0]}</b>
                <Badge>{row[5]}</Badge>
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
                  <small>{row[2]}</small>
                  <small>
                    {row[3]} · {row[4]}
                  </small>
                </span>
                <span className={cx("mobile-record-end")}>
                  <b className={cx("amount-value")}>{row[6]}</b>
                  <span
                    className={cx("mobile-booking-actions")}
                    aria-hidden="true"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    <img src="/edit.png" alt="edit" />
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
