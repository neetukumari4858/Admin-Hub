import { cx } from "./lib/cx";
import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/inter";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "AdminHub | Admin Dashboard",
  description: "Responsive administration dashboard for users, transactions, and bookings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={cx("tw-global")}><Providers>{children}</Providers></body>
    </html>
  );
}
