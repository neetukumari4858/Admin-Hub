"use client";

import { cx } from "../../lib/cx";
import { Search } from "lucide-react";
import { useState } from "react";
import FilterSelect from "./FilterSelect";
import MobileFilterPopup from "./MobileFilterPopup";

const dateOptions = [
  { value: "30", label: "Date Range: Last 30 Days" },
  { value: "7", label: "Last 7 Days" },
  { value: "all", label: "All Time" },
];
const statusOptions = [
  { value: "all", label: "Status: All" },
  ...["Confirmed", "Completed", "Pending", "Cancelled"].map((value) => ({
    value,
    label: value,
  })),
];
const serviceOptions = [
  { value: "all", label: "Service Type: All" },
  ...[
    "Business Consultation",
    "Technical Support",
    "Executive Coaching",
    "Strategy Session",
    "Personal Training",
  ].map((value) => ({ value, label: value })),
];

export default function BookingFilters({
  search,
  onSearch,
  date,
  onDate,
  status,
  onStatus,
  service,
  onService,
  onChange,
}: {
  search: string;
  onSearch: (value: string) => void;
  date: string;
  onDate: (value: string) => void;
  status: string;
  onStatus: (value: string) => void;
  service: string;
  onService: (value: string) => void;
  onChange: () => void;
}) {
  const [open, setOpen] = useState(false);
  const update = (fn: (value: string) => void) => (value: string) => {
    fn(value);
    onChange();
  };
  const controls = (
    <>
      <FilterSelect
        label="Date range"
        className={cx("sm:w-[148px]")}
        value={date}
        options={dateOptions}
        onChange={update(onDate)}
      />
      <FilterSelect
        label="Booking status"
        className="sm:w-[100px]"
        value={status}
        options={statusOptions}
        onChange={update(onStatus)}
      />
      <FilterSelect
        label="Service type"
        className={cx("sm:w-[132px]")}
        value={service}
        options={serviceOptions}
        onChange={update(onService)}
      />
    </>
  );
  return (
    <>
      <div className={cx("booking-filters booking-filters-hook")}>
        <label className={cx("filter-search")}>
          <Search aria-hidden="true" size={16} strokeWidth={1.9} />
          <input
            placeholder="Search bookings by ID or client..."
            aria-label="Search bookings"
            value={search}
            onChange={(event) => {
              onSearch(event.target.value);
              onChange();
            }}
          />
        </label>
        <button
          className={cx("filter-icon-button")}
          type="button"
          aria-label="Filters"
          onClick={() => setOpen(true)}
        >
          <span className={cx("filter-funnel")} />
        </button>
        <span
          className={cx("desktop-filter-selects desktop-filter-selects-hook")}
        >
          {controls}
        </span>
      </div>
      {open && (
        <MobileFilterPopup
          title="Booking Filters"
          onClose={() => setOpen(false)}
        >
          <label>
            Date range
            <FilterSelect
              label="Mobile date range"
              value={date}
              options={dateOptions}
              onChange={update(onDate)}
            />
          </label>
          <label>
            Status
            <FilterSelect
              label="Mobile booking status"
              value={status}
              options={statusOptions}
              onChange={update(onStatus)}
            />
          </label>
          <label>
            Service type
            <FilterSelect
              label="Mobile service type"
              value={service}
              options={serviceOptions}
              onChange={update(onService)}
            />
          </label>
        </MobileFilterPopup>
      )}
    </>
  );
}
