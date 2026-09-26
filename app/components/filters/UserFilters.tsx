"use client";

import { cx } from "../../lib/cx";
import { Search } from "lucide-react";
import { useState } from "react";
import FilterSelect from "./FilterSelect";
import MobileFilterPopup from "./MobileFilterPopup";

const roles = [
  { value: "all", label: "All Roles" },
  { value: "admin", label: "Admin" },
  { value: "moderator", label: "Moderator" },
  { value: "user", label: "User" },
];
const statuses = [
  { value: "all", label: "Status: All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "suspended", label: "Suspended" },
];
const sortOptions = [
  { value: "joined", label: "Date Joined" },
  { value: "name", label: "Name" },
];

export default function UserFilters({
  search,
  onSearch,
  role,
  onRoleChange,
  status,
  onStatusChange,
  sort,
  onSortChange,
  onFilterChange,
}: {
  search: string;
  onSearch: (value: string) => void;
  role: string;
  onRoleChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  onFilterChange: () => void;
}) {
  const [open, setOpen] = useState(false);
  const update = (callback: (value: string) => void) => (value: string) => {
    callback(value);
    onFilterChange();
  };

  return (
    <>
      <div className={`${cx("toolbar user-toolbar")} user-toolbar`}>
        <div className={cx("user-filters")}>
          <label className={cx("filter-search")}>
            <Search aria-hidden="true" size={16} strokeWidth={1.9} />
            <input
              aria-label="Search users"
              placeholder="Search users by name or email..."
              value={search}
              onChange={(event) => {
                onSearch(event.target.value);
                onFilterChange();
              }}
            />
          </label>
          <button
            className={`${cx("mobile-filter-toggle")} user-filter-toggle-hook`}
            type="button"
            aria-label="Filters"
            onClick={() => setOpen(true)}
          >
            <span className={cx("filter-funnel")} />
          </button>
          <FilterSelect
            label="Filter by role"
            className={cx("sm:w-[112px]")}
            value={role}
            options={roles}
            onChange={update(onRoleChange)}
          />
          <FilterSelect
            label="Filter by status"
            className={cx("sm:w-[112px]")}
            value={status}
            options={statuses}
            onChange={update(onStatusChange)}
          />
        </div>
        <span className={`${cx("sort-label")} user-sort-label-hook`}>
          Sort by: <FilterSelect label="Sort users" className={cx("sm:w-[125px]")} value={sort} options={sortOptions} onChange={update(onSortChange)} />
        </span>
      </div>
      {open && (
        <MobileFilterPopup title="User Filters" onClose={() => setOpen(false)}>
          <label>
            Role
            <FilterSelect label="Mobile user role" value={role} options={roles} onChange={update(onRoleChange)} />
          </label>
          <label>
            Status
            <FilterSelect label="Mobile user status" value={status} options={statuses} onChange={update(onStatusChange)} />
          </label>
          <label>
            Sort by
            <FilterSelect label="Mobile user sort" value={sort} options={sortOptions} onChange={update(onSortChange)} />
          </label>
        </MobileFilterPopup>
      )}
    </>
  );
}
