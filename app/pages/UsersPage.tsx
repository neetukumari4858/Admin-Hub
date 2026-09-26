"use client";

import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import { Badge, Pagination } from "../components/shared";
import Metric from "../components/MetricCard";
import UserFilters from "../components/filters/UserFilters";
import type { User } from "../data/records";

type Props = {
  users: User[];
  total: number;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  search: string;
  onSearch: (value: string) => void;
  page: number;
  setPage: (page: number) => void;
  onDetail: (user: User) => void;
};

function roleFor(index: number) {
  return index === 0 ? "admin" : index === 1 ? "moderator" : "user";
}

function statusFor(index: number) {
  return index % 5 === 4
    ? "suspended"
    : index % 5 === 2
      ? "inactive"
      : "active";
}

export default function UsersPage({
  users,
  total,
  isLoading,
  isError,
  error,
  refetch,
  search,
  onSearch,
  page,
  setPage,
  onDetail,
}: Props) {
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("joined");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const filteredUsers = useMemo(() => {
    const result = users.filter((user) => {
      const originalIndex = users.indexOf(user);
      return (
        `${user.firstName} ${user.lastName} ${user.email}`
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (role === "all" || roleFor(originalIndex) === role) &&
        (status === "all" || statusFor(originalIndex) === status)
      );
    });
    if (sort === "name")
      result.sort((a, b) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`,
        ),
      );
    return result;
  }, [users, search, role, status, sort]);
  const rows = filteredUsers.slice((page - 1) * 8, page * 8);

  return (
    <>
      <div
        className={`${cx("metrics-grid users-metrics users-metrics-hook")} users-metrics`}
      >
        <Metric
          label="Total Users"
          value={total.toLocaleString()}
          change=""
          icon=""
          hideChange
          hideIcon
        />
        <Metric
          label="Active Users"
          value="10,234"
          change=""
          icon=""
          hideChange
          hideIcon
        />
        <Metric
          label="New This Month"
          value="847"
          change=""
          icon=""
          hideChange
          hideIcon
        />
      </div>
      <article
        className={`${cx("card table-card directory-card")} directory-card`}
      >
        <UserFilters
          search={search}
          onSearch={onSearch}
          role={role}
          onRoleChange={setRole}
          status={status}
          onStatusChange={setStatus}
          sort={sort}
          onSortChange={setSort}
          onFilterChange={() => setPage(1)}
        />
        <button
          className={`${cx("primary mobile-page-action")} mobile-page-action`}
          type="button"
        >
          + Add New User
        </button>
        {selectedIds.length > 0 && (
          <div className={cx("bulk-bar")}>
            ✓ &nbsp; {selectedIds.length}{" "}
            {selectedIds.length === 1 ? "user" : "users"} selected
            <div>
              <button
                className={cx("secondary bulk-role-button")}
                type="button"
              >
                Change Role
              </button>
              <button
                className={cx("danger bulk-suspend-button")}
                type="button"
              >
                Suspend Accounts
              </button>
            </div>
          </div>
        )}
        {isLoading ? (
          <div className={cx("state-box")}>
            <span className={cx("spinner")} />
            Loading users…
          </div>
        ) : isError ? (
          <div className={cx("state-box error-state")}>
            <p>{error?.message ?? "Could not load users."}</p>
            <button className={cx("secondary")} onClick={refetch}>
              Try again
            </button>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className={cx("state-box")}>No users match your search.</div>
        ) : (
          <div className={cx("table-wrap user-desktop-table")}>
            <table>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      aria-label="Select all users"
                      checked={
                        filteredUsers.length > 0 &&
                        filteredUsers.every((user) =>
                          selectedIds.includes(user.id),
                        )
                      }
                      onChange={(event) => {
                        const visibleIds = filteredUsers.map((user) => user.id);
                        setSelectedIds((current) =>
                          event.target.checked
                            ? [...new Set([...current, ...visibleIds])]
                            : current.filter((id) => !visibleIds.includes(id)),
                        );
                      }}
                    />
                  </th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Last Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((user) => {
                  const index = users.indexOf(user);
                  return (
                    <tr key={user.id} onClick={() => onDetail(user)}>
                      <td>
                        <input
                          type="checkbox"
                          aria-label={`Select ${user.firstName}`}
                          checked={selectedIds.includes(user.id)}
                          onClick={(event) => event.stopPropagation()}
                          onChange={(event) =>
                            setSelectedIds((current) =>
                              event.target.checked
                                ? [...current, user.id]
                                : current.filter((id) => id !== user.id),
                            )
                          }
                        />
                      </td>
                      <td>
                        <span className={cx("table-person")}>
                          <span className={cx("table-avatar-wrap")}>
                            <span
                              className={cx(
                                "avatar avatar-small avatar-fallback",
                              )}
                            >
                              {user.firstName[0]}
                              {user.lastName[0]}
                            </span>
                            <img
                              className={cx(
                                "avatar avatar-small table-avatar-image",
                              )}
                              src={user.image}
                              alt=""
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          </span>
                          <span>
                            <b>
                              {user.firstName} {user.lastName}
                            </b>
                            <small>{user.email}</small>
                          </span>
                        </span>
                      </td>
                      <td>
                        <Badge>
                          {roleFor(index) === "admin"
                            ? "Admin"
                            : roleFor(index) === "moderator"
                              ? "Editor"
                              : "Viewer"}
                        </Badge>
                      </td>
                      <td>
                        <Badge>
                          {statusFor(index).charAt(0).toUpperCase() +
                            statusFor(index).slice(1)}
                        </Badge>
                      </td>
                      <td>
                        {
                          [
                            "Jan 12, 2024",
                            "Feb 22, 2024",
                            "Mar 10, 2024",
                            "Apr 05, 2024",
                            "May 19, 2024",
                            "Jun 01, 2024",
                          ][index % 6]
                        }
                      </td>
                      <td>
                        {
                          [
                            "2 mins ago",
                            "1 hour ago",
                            "3 days ago",
                            "Just now",
                            "1 week ago",
                          ][index % 5]
                        }
                      </td>
                      <td>
                        <button
                          className={cx("plain-action")}
                          aria-label={`Edit ${user.firstName} ${user.lastName}`}
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <img src="/edit.png" alt="edit" />
                        </button>
                        <button
                          className={cx("plain-action")}
                          aria-label={`View ${user.firstName} ${user.lastName}`}
                          title="View details"
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <img src="/delete.png" alt="delete" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {!isLoading && !isError && filteredUsers.length > 0 && (
          <div className={`${cx("mobile-user-list")} mobile-user-list`}>
            {rows.map((user) => {
              const index = users.indexOf(user);
              return (
                <button
                  className={`${cx("mobile-user-card")} mobile-user-card-hook`}
                  key={user.id}
                  onClick={() => onDetail(user)}
                >
                  <span className={cx("mobile-avatar-wrap")}>
                    <span className={cx("mobile-record-avatar")}>
                      {user.firstName[0]}
                      {user.lastName[0]}
                    </span>
                    <img
                      className={cx("mobile-record-avatar mobile-avatar-image")}
                      src={user.image}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </span>
                  <span className={cx("mobile-user-heading")}>
                    <b>
                      {user.firstName} {user.lastName}
                    </b>
                    <small>{user.email}</small>
                  </span>
                  <span
                    className={cx("mobile-user-actions")}
                    aria-hidden="true"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    <span>
                      <img src="/edit.png" alt="edit" />{" "}
                    </span>
                    <span>
                      <img src="/delete.png" alt="delete" />{" "}
                    </span>
                  </span>
                  <span
                    className={`${cx("mobile-user-divider")} mobile-user-divider-hook`}
                    aria-hidden="true"
                  />
                  <span
                    className={`${cx("mobile-user-badges")} mobile-user-badges-hook`}
                  >
                    <Badge>
                      {roleFor(index) === "admin"
                        ? "Admin"
                        : roleFor(index) === "moderator"
                          ? "Editor"
                          : "Viewer"}
                    </Badge>
                    <Badge>
                      {statusFor(index).charAt(0).toUpperCase() +
                        statusFor(index).slice(1)}
                    </Badge>
                  </span>
                  <small
                    className={`${cx("mobile-user-last-active")} mobile-user-last-active-hook`}
                  >
                    Active{" "}
                    {
                      [
                        "2 mins ago",
                        "1 hour ago",
                        "3 days ago",
                        "Just now",
                        "1 week ago",
                      ][index % 5]
                    }
                  </small>
                </button>
              );
            })}
          </div>
        )}
        <Pagination
          page={page}
          setPage={setPage}
          pages={Math.max(1, Math.ceil(filteredUsers.length / 8))}
        />
      </article>
    </>
  );
}
