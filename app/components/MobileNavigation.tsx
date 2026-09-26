"use client";

import { cx } from "../lib/cx";
import {
  ArrowLeftRight,
  CalendarDays,
  LayoutDashboard,
  UserRound,
  Users,
} from "lucide-react";
import { nav, type Section } from "../data/records";

const icons = [LayoutDashboard, Users, ArrowLeftRight, CalendarDays, UserRound];

export default function MobileNavigation({
  active,
  onSelect,
}: {
  active: Section;
  onSelect: (section: Section) => void;
}) {
  return (
    <nav
      className={cx(
        `fixed inset-x-0 bottom-0 z-[6] hidden h-16 items-center justify-around border-t border-[#e4eaf1] bg-white pb-[env(safe-area-inset-bottom)] max-[760px]:flex max-[760px]:h-7 ${active === "Dashboard" ? "dashboard-mobile-nav" : ""}`,
      )}
    >
      {[...nav, "Profile" as const].map((item, index) => {
        const Icon = icons[index];
        const selected = active === item;
        return (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={cx(
              `flex min-w-12 flex-col items-center gap-1 border-0 bg-transparent text-[9px] max-[760px]:min-w-0 max-[760px]:gap-[2px] max-[760px]:text-[6px] ${selected ? "text-[#4f46e5]" : "text-[#8793a5]"}`,
            )}
          >
            <Icon className={cx("size-[15px] max-[760px]:size-3")} />
            {item}
          </button>
        );
      })}
    </nav>
  );
}
