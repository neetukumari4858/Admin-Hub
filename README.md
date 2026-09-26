# AdminHub

A responsive admin dashboard inspired by the supplied Figma screens. Built with Next.js App Router, TypeScript, React, Tailwind CSS, TanStack Query, and Redux Toolkit.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run `npm run build` and then `npm start`.

## Screens

- Dashboard overview with KPI cards, revenue chart, system alerts, health status, and recent transactions
- Users directory with search, role filter, pagination, loading/error/empty states, selectable rows, and a user detail view
- Transactions ledger with summary cards, search, status badges, pagination, and a transaction detail view
- Bookings directory with summary cards, search, filters, and a booking detail view
- Responsive mobile bottom navigation and horizontal scrolling for dense data tables

## Public API

The user directory uses the free [DummyJSON Users API](https://dummyjson.com/users?limit=30). The dashboard's business metrics and sample transaction and booking records are illustrative frontend data because DummyJSON does not provide those business records.

## State and data

Redux Toolkit stores the selected dashboard section and shared search text. TanStack Query fetches and caches the user directory, with retry and stale-time behavior configured in `app/providers.tsx`. The user view presents loading, error, empty, and successful states.

