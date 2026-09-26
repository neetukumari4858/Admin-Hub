"use client";

import { ListFilter } from "lucide-react";
import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Badge } from "../components/shared";
import Metric from "../components/MetricCard";
import { transactions, type Section } from "../data/records";
// import UserIcon from "../public/user.png";

export default function DashboardPage({
  onNavigate,
  onTransaction,
  avatarSources,
}: {
  onNavigate: (section: Section) => void;
  onTransaction: (id: string) => void;
  avatarSources: string[];
}) {
  const [tab, setTab] = useState("Overview");
  const [range, setRange] = useState("6M");
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [transactionPage, setTransactionPage] = useState(1);
  const transactionsPerPage = 3;
  const transactionPages = Math.ceil(transactions.length / transactionsPerPage);
  const recentTransactions = transactions.slice(
    (transactionPage - 1) * transactionsPerPage,
    transactionPage * transactionsPerPage,
  );
  const mobileTransactions = showAllTransactions
    ? transactions
    : transactions.slice(0, transactionsPerPage);

  return (
    <div
      className={`${cx("dashboard-page mobile-dashboard-order dashboard-mobile-compact")} dashboard-page-hook`}
    >
      <div
        className={`${cx("dashboard-welcome dashboard-mobile-welcome")} dashboard-welcome-hook`}
      >
        <strong>Welcome back, Sarah</strong>
        <small>Tuesday, October 1, 2024</small>
      </div>
      <div
        className={`${cx("tabs mobile-dashboard-tabs")} dashboard-tabs-hook`}
      >
        {["Overview", "Analytics", "Reports", "Settings"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={cx(tab === item ? "active-tab" : "")}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={`${cx("metrics-grid")} dashboard-metrics-hook`}>
        <Metric
          label="Total Users"
          value="12,847"
          change="12.5%"
          icon="/users.png"
        />
        <Metric
          label="Total Revenue"
          value="$284,392"
          change="8.2%"
          icon="/dollar-sign.png"
        />
        <Metric
          label="Active Bookings"
          value="1,234"
          change="3.1%"
          icon="/vector.png"
          negative
        />
        <Metric
          label="Pending Transactions"
          value="89"
          change="24.6%"
          icon="/transactions.png"
        />
      </div>
      <div
        className={`${cx("dashboard-grid mobile-dashboard-grid")} dashboard-grid-hook`}
      >
        <article className={`${cx("card chart-card")} dashboard-chart-hook`}>
          <div className={cx("card-heading")}>
            <div>
              <h2>Revenue Overview</h2>
              <small>Apr 2024 – Sep 2024</small>
            </div>
            <div
              className={cx("range-tabs")}
              role="group"
              aria-label="Revenue timeframe"
            >
              {["7D", "1M", "3M", "6M", "1Y"].map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={range === item}
                  className={cx(range === item ? "selected" : "")}
                  onClick={() => setRange(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={`${cx("chart")} dashboard-chart-area-hook`}>
            <div className={`${cx("y-axis")} dashboard-y-axis-hook`}>
              <span>$350K</span>
              <span>$275K</span>
              <span>$200K</span>
              <span>$125K</span>
              <span>$50K</span>
            </div>
            <svg
              className={cx("desktop-revenue-chart")}
              viewBox="0 0 700 220"
              role="img"
              aria-label="Revenue chart trending upward"
            >
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#4f46e5" stopOpacity=".17" />
                  <stop offset="1" stopColor="#4f46e5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M10 175 L120 130 L230 155 L340 70 L450 94 L560 20 L680 5 L680 210 L10 210Z"
                fill="url(#area)"
              />
              <polyline
                points="10,175 120,130 230,155 340,70 450,94 560,20 680,5"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="2.5"
              />
              {[
                [10, 175],
                [120, 130],
                [230, 155],
                [340, 70],
                [450, 94],
                [560, 20],
                [680, 5],
              ].map(([cx, cy], index) => (
                <circle
                  key={index}
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill="white"
                  stroke="#4f46e5"
                  strokeWidth="2"
                />
              ))}
              <g className={cx("chart-grid")}>
                <path d="M0 20H700M0 65H700M0 110H700M0 155H700M0 200H700" />
              </g>
            </svg>
            <div
              className={`${cx("mobile-revenue-chart")} mobile-revenue-chart-hook`}
              aria-label="Revenue from April through September"
            >
              {[
                ["Apr", "45%"],
                ["May", "53%"],
                ["Jun", "52%"],
                ["Jul", "69%"],
                ["Aug", "79%"],
                ["Sep", "94%"],
              ].map(([day, height], index) => (
                <div key={`${day}-${index}`}>
                  <span className={`${cx("revenue-bar")} revenue-bar-hook`}>
                    <i style={{ height }} />
                  </span>
                  <small>{day}</small>
                </div>
              ))}
            </div>
            <div className={`${cx("x-axis")} dashboard-x-axis-hook`}>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
            </div>
          </div>
        </article>
        <div className={`${cx("side-widgets")} dashboard-side-widgets-hook`}>
          <article className={`${cx("card alert-card")} dashboard-alert-hook`}>
            <h2>System Alerts</h2>
            {[
              ["Server capacity at 92%", "Scale resources", "2 hours ago"],
              ["15 transactions pending", "Pending review", "5 hours ago"],
              [
                "System maintenance scheduled",
                "Scheduled for Oct 5",
                "Yesterday",
              ],
            ].map(([title, copy, time], index) => (
              <div
                className={`${cx("alert-row")} dashboard-alert-row-hook`}
                key={title}
              >
                <span className={cx(`dot dot-${index}`)} />
                <div>
                  <b>{title}</b>
                  <small>{copy}</small>
                  <small>{time}</small>
                </div>
              </div>
            ))}
          </article>
          <article
            className={`${cx("card health-card")} dashboard-health-hook`}
          >
            <h2>System Health</h2>
            {[
              ["Uptime", "99.8%"],
              ["Avg Response Time", "142ms"],
              ["Active Sessions", "3,241"],
            ].map(([label, value], index) => (
              <div
                className={index === 2 ? "max-[760px]:hidden" : undefined}
                key={label}
              >
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </article>
        </div>
      </div>
      <article
        className={`${cx("card table-card dashboard-transactions")} dashboard-transactions-hook`}
      >
        <div className={cx("card-heading")}>
          <h2>Recent Transactions</h2>
          <button
            type="button"
            className={`${cx("link-button dashboard-view-all")} dashboard-view-all-hook`}
            onClick={() => setShowAllTransactions((expanded) => !expanded)}
          >
            {showAllTransactions ? "Show Less" : "View All"}
          </button>
          <button
            className={cx("secondary dashboard-filter ")}
            onClick={() => onNavigate("Transactions")}
          >
            <img src="/filter.png" alt="Filter" /> Filter
          </button>
        </div>
        <div className={cx("table-wrap dashboard-desktop-table")}>
          <table>
            <thead>
              <tr>
                {[
                  "Transaction ID",
                  "User",
                  "Amount",
                  "Status",
                  "Date",
                  "Action",
                ].map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((row, index) => (
                <tr key={row[0]} onClick={() => onTransaction(row[0])}>
                  <td>
                    <b>{row[0]}</b>
                  </td>
                  <td>
                    <span className={cx("table-person")}>
                      {avatarSources.length > 0 ? (
                        <img
                          className={cx("avatar avatar-small")}
                          src={avatarSources[index % avatarSources.length]}
                          alt=""
                        />
                      ) : (
                        <span className={cx("avatar avatar-small")}>
                          {row[1]
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>
                      )}
                      {row[1]}
                    </span>
                  </td>
                  <td
                    className={cx(
                      row[3].startsWith("-")
                        ? "amount-negative"
                        : "amount-value",
                    )}
                  >
                    {row[3]}
                  </td>
                  <td>
                    <Badge>{row[4]}</Badge>
                  </td>
                  <td>{row[5]}</td>
                  <td>
                    <button
                      className={cx("plain-action")}
                      aria-label={`View ${row[0]}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        onTransaction(row[0]);
                      }}
                    >
                      <img src="/eyeIcon.png" alt="View" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`${cx("mobile-dashboard-transactions")} dashboard-mobile-transaction-list-hook`}
        >
          {mobileTransactions.map((row, index) => (
            <button
              className={cx("mobile-transaction-card")}
              key={row[0]}
              onClick={() => onTransaction(row[0])}
            >
              {avatarSources.length > 0 ? (
                <img
                  className={cx("mobile-record-avatar")}
                  src={avatarSources[index % avatarSources.length]}
                  alt=""
                />
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
                <small>
                  {row[0]} · {row[5]}
                </small>
              </span>
              <span className={cx("mobile-record-end")}>
                <b
                  className={cx(
                    row[3].startsWith("-") ? "amount-negative" : "amount-value",
                  )}
                >
                  {row[3]}
                </b>
                <Badge>{row[4]}</Badge>
              </span>
            </button>
          ))}
        </div>
        <div
          className={`${cx("dashboard-pagination")} dashboard-pagination-hook`}
        >
          <span>
            Showing{" "}
            <b>
              {(transactionPage - 1) * transactionsPerPage + 1}–
              {Math.min(
                transactionPage * transactionsPerPage,
                transactions.length,
              )}
            </b>{" "}
            of <b>{transactions.length}</b>
          </span>
          <div>
            <button
              type="button"
              disabled={transactionPage === 1}
              onClick={() => setTransactionPage((page) => page - 1)}
            >
              Previous
            </button>
            <span>
              {transactionPage} / {transactionPages}
            </span>
            <button
              type="button"
              disabled={transactionPage === transactionPages}
              onClick={() => setTransactionPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
