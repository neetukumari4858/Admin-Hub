"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogTitle = DialogPrimitive.Title;

export function DialogContent({
  className = "",
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-[#17223866] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        className={`fixed inset-x-0 bottom-0 z-[71] grid max-h-[85vh] gap-3 overflow-y-auto rounded-t-xl border border-[#e4eaf1] bg-white p-4 pb-[calc(16px+env(safe-area-inset-bottom))] text-[#253149] shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Close filters"
          className="absolute right-3 top-3 inline-flex size-7 items-center justify-center rounded-full border border-[#e4eaf1] bg-white text-[#526176] outline-none focus-visible:ring-2 focus-visible:ring-[#4f46e5]/25"
        >
          <X className="size-3.5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
