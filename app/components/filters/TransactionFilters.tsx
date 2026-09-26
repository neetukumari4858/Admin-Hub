"use client";

import { cx } from "../../lib/cx";
import { Search } from "lucide-react";
import { useState } from "react";
import FilterSelect from "./FilterSelect";
import MobileFilterPopup from "./MobileFilterPopup";

const dateOptions = [
  { value: "3", label: "Date: Last 3 Days" },
  { value: "30", label: "Date: Last 30 Days" },
  { value: "7", label: "Last 7 Days" },
  { value: "all", label: "All Time" },
];
const typeOptions = [
  { value: "all", label: "Type: All Types" },
  ...["Payment", "Refund", "Transfer"].map((value) => ({
    value,
    label: value,
  })),
];
const amountOptions = [
  { value: "all", label: "Amount: All" },
  { value: "under100", label: "Under $100" },
  { value: "100plus", label: "$100 and above" },
];

export default function TransactionFilters({
  search,
  onSearch,
  date,
  onDate,
  type,
  onType,
  amount,
  onAmount,
  onChange,
}: {
  search: string;
  onSearch: (value: string) => void;
  date: string;
  onDate: (value: string) => void;
  type: string;
  onType: (value: string) => void;
  amount: string;
  onAmount: (value: string) => void;
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
        className="sm:w-[152px]"
        value={date}
        options={dateOptions}
        onChange={update(onDate)}
      />
      <FilterSelect
        label="Transaction type"
        className="transaction-type-hook"
        value={type}
        options={typeOptions}
        onChange={update(onType)}
      />
      <FilterSelect
        label="Amount"
        className="sm:w-[112px]"
        value={amount}
        options={amountOptions}
        onChange={update(onAmount)}
      />
    </>
  );
  return (
    <>
      <div className={cx("transaction-filters")}>
        <label className={cx("filter-search")}>
          <Search aria-hidden="true" size={16} strokeWidth={1.9} />
          <input
            placeholder="Search ID or User..."
            aria-label="Search transactions"
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
        <span className={cx("desktop-filter-selects desktop-filter-selects-hook")}>{controls}</span>
      </div>
      {open && (
        <MobileFilterPopup
          title="Transaction Filters"
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
            Type
            <FilterSelect
              label="Mobile transaction type"
              value={type}
              options={typeOptions}
              onChange={update(onType)}
            />
          </label>
          <label>
            Amount
            <FilterSelect
              label="Mobile amount"
              value={amount}
              options={amountOptions}
              onChange={update(onAmount)}
            />
          </label>
        </MobileFilterPopup>
      )}
    </>
  );
}
