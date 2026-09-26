import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

export function Badge({ children }: { children: string }) {
  return (
    <span
      className={`${cx(`badge ${children.toLowerCase().replaceAll(" ", "-")}`)} badge`}
    >
      {children}
    </span>
  );
}

export function Pagination({
  page,
  setPage,
  pages,
}: {
  page: number;
  setPage: (n: number) => void;
  pages: number;
}) {
  return (
    <div className={`${cx("pagination")} pagination`}>
      <span>
        Showing{" "}
        <b>
          {page === 1
            ? "1–8"
            : `${(page - 1) * 8 + 1}–${Math.min(page * 8, pages * 8)}`}
        </b>{" "}
        of <b>{pages * 8 + 3}</b> results
      </span>
      <div>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={page >= pages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export function DataTable({
  rows,
  headings,
  onRow,
  avatarSources = [],
  showEditAction = false,
}: {
  rows: string[][];
  headings: string[];
  onRow: (value: string) => void;
  avatarSources?: string[];
  showEditAction?: boolean;
}) {
  const statusIndex = headings.indexOf("Status");
  const typeIndex = headings.indexOf("Type");
  const amountIndex = headings.indexOf("Amount");
  return (
    <div className={cx("table-wrap")}>
      <table>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? (
            rows.map((row) => (
              <tr key={row[0]} onClick={() => onRow(row[0])}>
                {row.map((cell, index) => (
                  <td key={index}>
                    {index === statusIndex || index === typeIndex ? (
                      <Badge>{cell}</Badge>
                    ) : index === 1 ? (
                      <span className={cx("table-person")}>
                        <span className={cx("table-avatar-wrap")}>
                          <span
                            className={cx(
                              "avatar avatar-small avatar-fallback",
                            )}
                          >
                            {cell
                              .split(" ")
                              .map((part) => part[0])
                              .join("")}
                          </span>
                          {avatarSources.length > 0 && (
                            <img
                              className={cx(
                                "avatar avatar-small table-avatar-image",
                              )}
                              src={
                                avatarSources[
                                  Number(row[0].match(/\d+/)?.[0] ?? 0) %
                                    avatarSources.length
                                ]
                              }
                              alt=""
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          )}
                        </span>
                        <b>{cell}</b>
                      </span>
                    ) : index === 0 ? (
                      <b>{cell}</b>
                    ) : index === amountIndex ? (
                      <span
                        className={cx(
                          cell.startsWith("-")
                            ? "amount-negative"
                            : "amount-value",
                        )}
                      >
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
                {headings.at(-1)?.toLowerCase().includes("action") &&
                  row.length < headings.length && (
                    <td>
                      <span className={cx("table-actions")}>
                        {showEditAction && (
                          <button
                            type="button"
                            className={cx("plain-action")}
                            aria-label={`Edit ${row[0]}`}
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                          >
                            <img src="/edit.png" alt="" />
                          </button>
                        )}
                        <button
                          type="button"
                          className={cx("plain-action")}
                          aria-label={`View ${row[0]}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            onRow(row[0]);
                          }}
                        >
                          <img src="/eyeIcon.png" alt="edit" />
                        </button>
                      </span>
                    </td>
                  )}
              </tr>
            ))
          ) : (
            <tr>
              <td className={cx("empty-cell")} colSpan={headings.length}>
                No matching records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function DetailLines({ children }: { children: ReactNode }) {
  return <div className={cx("detail-lines")}>{children}</div>;
}
