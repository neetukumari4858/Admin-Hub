import { cx } from "../../lib/cx";
import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "../../../components/ui/dialog";

export default function MobileFilterPopup({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle className={cx("pr-8 text-sm font-semibold")}>{title}</DialogTitle>
        <div className={cx("grid gap-3 [&_label]:grid [&_label]:gap-1.5 [&_label]:text-[11px] [&_label]:text-[#526176] [&_label>div]:w-full [&_label>button]:w-full")}>
          {children}
        </div>
        <button
          className={cx("h-9 rounded-md bg-[#4f46e5] px-3 text-xs font-semibold text-white hover:bg-[#4338ca]")}
          type="button"
          onClick={onClose}
        >
          Apply Filters
        </button>
      </DialogContent>
    </Dialog>
  );
}
