export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  phone: string;
  address: { address: string; city: string; state: string };
  company: { title: string; name: string };
  role: string;
};

export type ApiUsers = { users: User[]; total: number };
export type Section =
  | "Dashboard"
  | "Users"
  | "Transactions"
  | "Bookings"
  | "Profile";
export const nav: Section[] = [
  "Dashboard",
  "Users",
  "Transactions",
  "Bookings",
];
export const pageCopy: Record<
  Section,
  { title: string; heading: string; description: string }
> = {
  Dashboard: {
    title: "Welcome back, Sarah",
    heading: "Overview",
    description: "Your business at a glance",
  },
  Users: {
    title: "User Management",
    heading: "Users Directory",
    description: "Manage all registered users in your application",
  },
  Transactions: {
    title: "Transactions Ledger",
    heading: "Transaction History",
    description: "Monitor and manage all corporate financial transactions",
  },
  Bookings: {
    title: "Bookings",
    heading: "Bookings Directory",
    description: "Manage service bookings and consultation meetings",
  },
  Profile: {
    title: "Profile",
    heading: "My Profile",
    description: "Account information and preferences",
  },
};

export const transactions = [
  [
    "#TXN-1082",
    "Albert Flores",
    "Payment",
    "$150.00",
    "Completed",
    "Oct 1, 2024",
  ],
  [
    "#TXN-1081",
    "Jenny Wilson",
    "Payment",
    "$2,350.00",
    "Pending",
    "Sep 30, 2024",
  ],
  [
    "#TXN-1080",
    "Kathryn Murphy",
    "Refund",
    "-$420.00",
    "Refunded",
    "Sep 29, 2024",
  ],
  ["#TXN-1079", "Guy Hawkins", "Payment", "$85.00", "Failed", "Sep 28, 2024"],
  [
    "#TXN-1078",
    "Esther Howard",
    "Transfer",
    "$1,200.00",
    "Completed",
    "Sep 27, 2024",
  ],
  ["#TXN-1077", "Cody Fisher", "Payment", "$340.00", "Pending", "Sep 26, 2024"],
  [
    "#TXN-1076",
    "Jane Cooper",
    "Payment",
    "$500.00",
    "Completed",
    "Sep 25, 2024",
  ],
  [
    "#TXN-1075",
    "Wade Warren",
    "Refund",
    "-$95.00",
    "Completed",
    "Sep 25, 2024",
  ],
];

export const bookings = [
  [
    "#BKG-2341",
    "Sarah Johnson",
    "Business Consultation",
    "Oct 15, 2024 · 14:00",
    "1.5 hrs",
    "Confirmed",
    "$180.00",
  ],
  [
    "#BKG-2340",
    "Michael Brown",
    "Technical Support",
    "Oct 14, 2024 · 10:00",
    "1 hr",
    "Completed",
    "$120.00",
  ],
  [
    "#BKG-2339",
    "Emily Davis",
    "Executive Coaching",
    "Oct 13, 2024 · 13:30",
    "2 hrs",
    "Pending",
    "$250.00",
  ],
  [
    "#BKG-2338",
    "David Wilson",
    "Strategy Session",
    "Oct 12, 2024 · 11:30",
    "1.5 hrs",
    "Cancelled",
    "$180.00",
  ],
  [
    "#BKG-2337",
    "Emma Jones",
    "Personal Training",
    "Oct 11, 2024 · 09:00",
    "1 hr",
    "Completed",
    "$95.00",
  ],
  [
    "#BKG-2336",
    "Robert Taylor",
    "Business Consultation",
    "Oct 10, 2024 · 14:00",
    "1.5 hrs",
    "Confirmed",
    "$180.00",
  ],
  [
    "#BKG-2335",
    "Clara Martin",
    "Technical Support",
    "Oct 09, 2024 · 13:00",
    "1 hr",
    "Completed",
    "$120.00",
  ],
  [
    "#BKG-2334",
    "Joseph Thomas",
    "Executive Coaching",
    "Oct 08, 2024 · 10:00",
    "2 hrs",
    "Confirmed",
    "$250.00",
  ],
];
