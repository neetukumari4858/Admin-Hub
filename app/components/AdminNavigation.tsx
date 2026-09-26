import { cx } from "../lib/cx";
import {
  ArrowLeftRight,
  Bell,
  CalendarDays,
  LayoutDashboard,
  Search,
  Users,
  X,
} from "lucide-react";
import { nav, type Section } from "../data/records";
/* eslint-disable @next/next/no-img-element */

const navigationIcons = [LayoutDashboard, Users, ArrowLeftRight, CalendarDays];

export function Sidebar({
  active,
  onSelect,
  onClose,
  mobileOpen = false,
}: {
  active: Section;
  onSelect: (section: Section) => void;
  onClose: () => void;
  mobileOpen?: boolean;
}) {
  return (
    <aside
      className={cx(
        `fixed inset-y-0 left-0 z-[12] flex w-56 flex-col bg-[#1d2a40] px-[13px] pb-[14px] pt-[18px] text-slate-50 max-[1100px]:w-[190px] max-[760px]:hidden ${mobileOpen ? "max-[760px]:flex max-[760px]:w-[min(78vw,250px)] max-[760px]:shadow-[8px_0_24px_#10182840]" : ""}`,
      )}
    >
      <div
        className={cx(
          "flex h-[42px] items-center gap-[10px] px-2 text-base font-bold",
        )}
      >
        <span
          className={cx(
            "grid size-[26px] place-items-center rounded-[7px] bg-[#5047ed] text-white",
          )}
        >
          <img src="/logo.png" alt="logo" />{" "}
        </span>
        <span>AdminHub</span>
        {mobileOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className={cx(
              "ml-auto grid size-8 place-items-center rounded-md border border-[#526176] bg-transparent text-white max-[760px]:grid min-[761px]:hidden",
            )}
          >
            <X className={cx("size-4")} />
          </button>
        )}
      </div>
      <nav className={cx("mt-[17px] grid gap-[5px]")}>
        {nav.map((item, index) => {
          const Icon = navigationIcons[index];
          const selected = active === item;
          return (
            <button
              key={item}
              onClick={() => onSelect(item)}
              className={cx(
                `flex h-9 items-center gap-3 rounded-md border-0 px-3 text-left text-xs transition-colors ${selected ? "bg-[#314058] text-white" : "bg-transparent text-[#c5cfde] hover:bg-[#314058] hover:text-white"}`,
              )}
            >
              <Icon
                className={cx(
                  `size-[14px] ${selected ? "text-white" : "text-[#a9b8ca]"}`,
                )}
              />
              {item}
            </button>
          );
        })}
      </nav>
      <div
        className={cx(
          "mt-auto flex items-center gap-[9px] border-t border-[#344258] px-1 pb-0 pt-[14px] text-[11px]",
        )}
      >
        <div
          className={cx(
            "grid size-[22px] place-items-center rounded-full border border-[#d5deeb] bg-[#dde4f5] text-[8px] font-bold text-[#38446b]",
          )}
        >
          SJ
        </div>
        <div>
          <strong className={cx("block")}>Sarah Jenkins</strong>
          <small className={cx("mt-[3px] block text-[#aebbd0]")}>
            Super Admin
          </small>
        </div>
      </div>
    </aside>
  );
}

export function Topbar({
  title,
  search,
  onSearch,
  onMenuToggle,
  avatarUrl,
}: {
  title: string;
  search: string;
  onSearch: (value: string) => void;
  onMenuToggle: () => void;
  avatarUrl?: string;
}) {
  return (
    <header
      className={cx(
        `flex h-[62px] items-center justify-between border-b border-[#e4eaf1] bg-white px-7 max-[760px]:grid max-[760px]:h-[28px] max-[760px]:min-h-[28px] max-[760px]:grid-cols-[minmax(0,1fr)_auto] max-[760px]:px-[7px] max-[760px]:py-1 ${title === "Welcome back, Sarah" ? "dashboard-mobile-topbar" : ""}`,
      )}
    >
      <div className={cx("hidden items-center gap-3 max-[760px]:flex")}>
        <button
          className={cx(
            "grid size-8 place-items-center rounded-md border border-[#e4eaf1] bg-white text-[#526176]",
          )}
          aria-label="Open navigation"
          onClick={onMenuToggle}
        >
          <span className={cx("flex flex-col gap-[3px]")}>
            <i className={cx("h-px w-3 bg-current")} />
            <i className={cx("h-px w-3 bg-current")} />
            <i className={cx("h-px w-3 bg-current")} />
          </span>
        </button>
        <span
          className={cx(
            "grid size-[26px] place-items-center rounded-[7px] bg-[#5047ed] text-white",
          )}
        >
          <img
            src="/mobileLogo.png"
            alt="mobileLogo"
            className={cx("size-[13px]")}
          />{" "}
        </span>
        <strong className={cx("text-sm")}>AdminHub</strong>
      </div>
      <div className={cx("max-[760px]:hidden")}>
        <strong className={cx("block text-sm")}>{title}</strong>
        <small className={cx("mt-[3px] block text-[10px] text-[#718096]")}>
          Tuesday, October 1, 2024
        </small>
      </div>
      <div className={cx("flex items-center gap-[14px] max-[760px]:gap-2")}>
        <label className={cx("relative max-[760px]:hidden")}>
          <Search
            className={cx(
              "absolute left-[10px] top-1/2 size-3 -translate-y-1/2 text-[#8995a8]",
            )}
          />
          <input
            className={cx(
              "h-[34px] w-[190px] rounded-md border border-[#e4eaf1] bg-[#fbfcfe] pl-[29px] pr-[10px] text-[11px] text-[#526176] outline-none focus:border-[#a5a1f5]",
            )}
            aria-label="Search console"
            placeholder="Search console..."
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </label>
        <button
          className={cx(
            "relative grid size-8 place-items-center rounded-full border border-[#e4eaf1] bg-white text-[#526176]",
          )}
          aria-label="Notifications"
        >
          <Bell className={cx("size-4")} />
          <i
            className={cx(
              "absolute -right-1 -top-1 grid size-4 place-items-center rounded-full border-2 border-white bg-red-500 text-[8px] not-italic leading-none text-white",
            )}
          >
            3
          </i>
        </button>
        <div
          className={cx(
            "relative grid size-[30px] place-items-center overflow-hidden rounded-full border border-[#d5deeb] bg-[#dde4f5] text-[10px] font-bold text-[#38446b]",
          )}
        >
          <span>SJ</span>
          {avatarUrl && (
            <img
              className="absolute inset-0 hidden size-full rounded-full object-cover max-[760px]:block"
              src={avatarUrl}
              alt=""
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
