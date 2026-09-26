"use client";
import { cx } from "./lib/cx";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { setSection, setSearch } from "./state/dashboardSlice";
import { Sidebar, Topbar } from "./components/AdminNavigation";
import MobileNavigation from "./components/MobileNavigation";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import TransactionsPage from "./pages/TransactionsPage";
import BookingsPage from "./pages/BookingsPage";
import ProfilePage from "./pages/ProfilePage";
import RecordDetails from "./components/RecordDetails";
import { getUsers } from "./data/api";
import { pageCopy, type ApiUsers, type Section, type User } from "./data/records";

export default function Home() {
  const dispatch = useAppDispatch();
  const { section, search } = useAppSelector((state) => state.dashboard);
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState<User | string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data, isLoading, isError, error, refetch } = useQuery<ApiUsers>({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 60_000,
  });
  const copy = pageCopy[section];
  const avatars = data?.users.map((user) => user.image) ?? [];

  function navigate(nextSection: Section) {
    setMobileMenuOpen(false);
    setDetail(null);
    setPage(1);
    dispatch(setSection(nextSection));
  }

  return (
    <div className={cx("flex min-h-screen bg-[#f6f8fb] font-[Arial,Helvetica,sans-serif] text-[13px] text-[#172238]")}>
      {mobileMenuOpen && (
        <button
          className={cx("fixed inset-0 z-[11] hidden border-0 bg-[#101828b3] max-[760px]:block")}
          aria-label="Close navigation"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <Sidebar
        active={section}
        onSelect={navigate}
        onClose={() => setMobileMenuOpen(false)}
        mobileOpen={mobileMenuOpen}
      />
      <main
        className={cx(`ml-56 min-h-screen w-[calc(100%-224px)] max-[1100px]:ml-[190px] max-[1100px]:w-[calc(100%-190px)] max-[760px]:ml-0 max-[760px]:w-full max-[760px]:pb-16 ${section === "Dashboard" ? "main-dashboard" : ""} ${detail ? "detail-mobile-main-hook" : ""}`)}
      >
        <Topbar
          title={copy.title}
          search={search}
          onSearch={(value) => dispatch(setSearch(value))}
          onMenuToggle={() => setMobileMenuOpen((open) => !open)}
          avatarUrl={avatars[0]}
        />
        <section className={`${cx("content mx-auto w-full max-w-[1500px] px-7 pb-10 pt-[25px] max-[1100px]:px-5 max-[760px]:px-3 max-[760px]:pb-[72px] max-[760px]:pt-3")} ${section === "Dashboard" ? "dashboard-mobile-content-hook" : ""} ${section === "Users" ? "users-mobile-layout-hook" : ""}`}>
          {section !== "Dashboard" && section !== "Profile" && !detail && (
            <div className={`${cx("mobile-page-intro")} mobile-page-intro`}>
              <h1>{section === "Bookings" ? "Active Bookings" : copy.title}</h1>
              <p>{copy.description}</p>
            </div>
          )}
          {!detail && <div className={cx(`page-heading page-heading-${section.toLowerCase()}`)}>
            <div>
              <h1>{copy.heading}</h1>
              <p>{copy.description}</p>
            </div>
            {!detail && (section === "Users" || section === "Bookings") && (
              <button className={cx("primary")} type="button">
                + {section === "Users" ? "Add User" : "New Booking"}
              </button>
            )}
          </div>}
          {detail ? (
            <RecordDetails
              detail={detail}
              section={section}
              onBack={() => setDetail(null)}
              avatarSources={avatars}
            />
          ) : (
            <>
              {section === "Dashboard" && (
                <DashboardPage
                  onNavigate={navigate}
                  onTransaction={(id) => {
                    navigate("Transactions");
                    setDetail(id);
                  }}
                  avatarSources={avatars}
                />
              )}
              {section === "Users" && (
                <UsersPage
                  users={data?.users ?? []}
                  total={data?.total ?? 0}
                  isLoading={isLoading}
                  isError={isError}
                  error={error instanceof Error ? error : null}
                  refetch={() => {
                    void refetch();
                  }}
                  search={search}
                  onSearch={(value) => dispatch(setSearch(value))}
                  page={page}
                  setPage={setPage}
                  onDetail={setDetail}
                />
              )}
              {section === "Transactions" && (
                <TransactionsPage
                  search={search}
                  onSearch={(value) => dispatch(setSearch(value))}
                  page={page}
                  setPage={setPage}
                  onDetail={setDetail}
                  avatarSources={avatars}
                />
              )}
              {section === "Bookings" && (
                <BookingsPage
                  search={search}
                  onSearch={(value) => dispatch(setSearch(value))}
                  page={page}
                  setPage={setPage}
                  onDetail={setDetail}
                  avatarSources={avatars}
                />
              )}
              {section === "Profile" && <ProfilePage />}
            </>
          )}
        </section>
        <MobileNavigation active={section} onSelect={navigate} />
      </main>
    </div>
  );
}
