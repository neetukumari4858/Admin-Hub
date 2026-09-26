import { cx } from "../lib/cx";
/* eslint-disable @next/next/no-img-element */
import {
  ArrowLeft,
  ArrowLeftRight,
  CalendarDays,
  MoreHorizontal,
  Pencil,
  Printer,
} from "lucide-react";
import { Badge } from "./shared";
import {
  bookings,
  transactions,
  type Section,
  type User,
} from "../data/records";

type Props = {
  detail: User | string;
  section: Section;
  onBack: () => void;
  avatarSources: string[];
};

function Activity({ title, copy }: { title: string; copy: string }) {
  return (
    <div className={`${cx("activity-item")} activity-item`}>
      <b>{title}</b>
      <small>{copy}</small>
    </div>
  );
}

export default function RecordDetails({
  detail,
  section,
  onBack,
  avatarSources,
}: Props) {
  return (
    <section className={`${cx("detail-page")} detail-page`}>
      <div className={cx("detail-breadcrumb")}>
        <button
          className="inline-flex items-center gap-1.5 font-semibold"
          onClick={onBack}
        >
          <ArrowLeft className="hidden size-3 max-[760px]:inline" />
          <span className="max-[760px]:hidden">
            {section === "Transactions"
              ? "Transactions"
              : section === "Bookings"
                ? "Bookings"
                : "Users"}
          </span>
          <span className="hidden max-[760px]:inline">
            {section === "Transactions"
              ? "Transaction Detail"
              : section === "Bookings"
                ? "Booking Detail"
                : "User Detail"}
          </span>
        </button>
        <span className="max-[760px]:hidden">/</span>
        <strong className="max-[760px]:hidden">
          {typeof detail === "object"
            ? `${detail.firstName} ${detail.lastName}`
            : detail}
        </strong>
        {typeof detail === "object" ? (
          <button
            type="button"
            className={`${cx("detail-edit-icon")} detail-top-icon-hook`}
            aria-label="Edit user"
          >
            <Pencil size={13} />
          </button>
        ) : section === "Transactions" ? (
          <button
            type="button"
            className={`${cx("detail-top-icon")} detail-top-icon-hook`}
            aria-label="Print receipt"
          >
            <Printer size={13} />
          </button>
        ) : (
          <button
            type="button"
            className={`${cx("detail-top-icon")} detail-top-icon-hook`}
            aria-label="More booking options"
          >
            <MoreHorizontal size={14} />
          </button>
        )}
      </div>
      {typeof detail === "object" ? (
        <>
          <div className={`${cx("detail-hero card")} detail-hero`}>
            <span
              className={`${cx("detail-profile-avatar-wrap")} detail-avatar`}
            >
              <span className={cx("detail-avatar-fallback")}>
                {detail.firstName[0]}
                {detail.lastName[0]}
              </span>
              <img
                className={`${cx("detail-avatar detail-profile-image")} detail-avatar`}
                src={detail.image}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </span>
            <div>
              <h1>
                {detail.firstName} {detail.lastName}
              </h1>
              <p>
                {detail.email}
                <span className="detail-joined-hook">
                  {" "}
                  · Joined Jan 12, 2024
                </span>
              </p>
            </div>
            <div className="flex gap-2">
              <Badge>Active</Badge>
              <Badge>Confirmed</Badge>
            </div>
            <span className={`${cx("detail-actions")} detail-actions`}>
              <button
                className={`${cx("secondary detail-outline-action")} detail-edit-profile-hook`}
              >
                Edit Profile
              </button>
              <button
                className={`${cx("danger detail-outline-action")} detail-danger-action-hook`}
              >
                Suspend User
              </button>
            </span>
          </div>
          <div className={`${cx("detail-columns")} detail-columns`}>
            <div className={`${cx("detail-stack")} detail-stack`}>
              <article className={`${cx("card detail-card")} detail-card`}>
                <h2>Personal Information</h2>
                <div className={`${cx("detail-lines")} detail-lines`}>
                  <span>
                    Full Name
                    <b>
                      {detail.firstName} {detail.lastName}
                    </b>
                  </span>
                  <span>
                    Email Address<b>{detail.email}</b>
                  </span>
                  <span>
                    Phone Number<b>{detail.phone}</b>
                  </span>
                  <span>
                    Date of Birth<b>{detail.age} years</b>
                  </span>
                  <span>
                    Mailing Address
                    <b>
                      {detail.address.address}, {detail.address.city}
                    </b>
                  </span>
                </div>
              </article>
              <article className={`${cx("card detail-card")} detail-card`}>
                <h2>Account Information</h2>
                <div className={`${cx("detail-lines")} detail-lines`}>
                  <span>
                    User ID<b>USR-{detail.id}</b>
                  </span>
                  <span>
                    Joined Date<b>January 12, 2024</b>
                  </span>
                  <span>
                    Last Login Activity<b>Today, 14:24</b>
                  </span>
                  <span className={cx("two-factor-row-hook")}>
                    Two-Factor Security<Badge>Enabled</Badge>
                  </span>
                </div>
              </article>
            </div>
            <article className={`${cx("card detail-card")} detail-card`}>
              <h2>Recent Activity Log</h2>
              <Activity
                title="Created booking #BKG-2341"
                copy="Strategy development session · 2 hours ago"
              />
              <Activity
                title="Changed user password"
                copy="Initiated self-service reset · Sep 27, 2024"
              />
              <Activity
                title="Logged in from new device"
                copy="Mac OS, Brooklyn, NY · Sep 24, 2024"
              />
              <Activity
                title="Completed transaction #TXN-7823"
                copy="Direct invoice payment received · Sep 27, 2024"
              />
              <Activity
                title="Updated profile photo"
                copy="Refreshed corporate portrait · Sep 15, 2024"
              />
            </article>
          </div>
          <div className={`${cx("detail-bottom-grid")} detail-bottom-grid`}>
            <article className={`${cx("card detail-card")} detail-card`}>
              <h2>{detail.firstName}&apos;s Recent Transactions</h2>
              <div className={`${cx("table-wrap")} table-wrap`}>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#TXN-7823</td>
                      <td>$245.00</td>
                      <td>
                        <Badge>Paid</Badge>
                      </td>
                      <td>Sep 27, 2024</td>
                    </tr>
                    <tr>
                      <td>#TXN-7102</td>
                      <td>$120.00</td>
                      <td>
                        <Badge>Completed</Badge>
                      </td>
                      <td>Aug 15, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
            <article className={`${cx("card detail-card")} detail-card`}>
              <h2>{detail.firstName}&apos;s Recent Bookings</h2>
              <div className={`${cx("table-wrap")} table-wrap`}>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Date &amp; Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#BKG-2341</td>
                      <td>Consultation</td>
                      <td>
                        <Badge>Confirmed</Badge>
                      </td>
                      <td>Oct 15, 14:00</td>
                    </tr>
                    <tr>
                      <td>#BKG-1980</td>
                      <td>Executive Coaching</td>
                      <td>
                        <Badge>Completed</Badge>
                      </td>
                      <td>Sep 01, 10:30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </>
      ) : section === "Transactions" ? (
        <TransactionDetails
          id={detail}
          onBack={onBack}
          avatarSources={avatarSources}
        />
      ) : (
        <BookingDetails id={detail} avatarSources={avatarSources} />
      )}
    </section>
  );
}

function TransactionDetails({
  id,
  onBack,
  avatarSources,
}: {
  id: string;
  onBack: () => void;
  avatarSources: string[];
}) {
  const record = transactions.find((row) => row[0] === id);
  return (
    <>
      <div className={`${cx("detail-hero card")} detail-hero`}>
        <button
          className={`${cx("back-mark")} back-mark transaction-hero-icon-hook`}
          onClick={onBack}
          aria-label="Back to transactions"
        >
          <ArrowLeftRight size={18} strokeWidth={2.25} />
        </button>
        <div>
          <h1>Transaction {id}</h1>
          <p className="transaction-reference-hook">
            Reference #REF-98342718 · Generated on Sep 27, 2024 11:32 AM
          </p>
          <strong className={cx("detail-mobile-amount")}>
            {record?.[3] ?? "$150.00"}
          </strong>
        </div>
        <div>
          <Badge>{record?.[4] ?? "Paid"}</Badge>
        </div>
        <span className={`${cx("detail-actions")} detail-actions`}>
          <button className={cx("primary")}>Refund </button>
          <button className={cx("secondary detail-outline-action")}>
            <Printer size={12} /> Print Receipt
          </button>
        </span>
      </div>
      <div className={`${cx("detail-columns")} detail-columns`}>
        <div className={`${cx("detail-stack")} detail-stack`}>
          <article className={`${cx("card detail-card")} detail-card`}>
            <h2>Transaction Invoice Details</h2>
            <div className={`${cx("detail-lines")} detail-lines`}>
              <span>
                Transaction Type<b>Service Payment</b>
              </span>
              <span>
                Payment Method<b>Credit Card (Visa ending in 4582)</b>
              </span>
              <span>
                Processing Gateway Fee<b>$4.90</b>
              </span>
              <span>
                Subtotal<b>$145.10</b>
              </span>
              <span>
                <strong>Grand Total</strong>
                <b className={cx("detail-grand-total")}>
                  {record?.[3] ?? "$150.00"}
                </b>
              </span>
            </div>
          </article>
          <article
            className={`${cx("card detail-card customer-summary")} detail-card`}
          >
            <h2>Customer Profile Summary</h2>
            <div className={cx("customer-row")}>
              <span className={cx("detail-customer-avatar-wrap")}>
                <span className={cx("avatar")}>AF</span>
                {avatarSources.length > 0 && (
                  <img
                    className={cx("avatar detail-customer-avatar")}
                    src={
                      avatarSources[
                        Number(id.match(/\d+/)?.[0] ?? 0) % avatarSources.length
                      ]
                    }
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </span>
              <span>
                <b>{record?.[1] ?? "Albert Flores"}</b>
                <small>albert.flores@example.com · ID USR-4821</small>
              </span>
            </div>
          </article>
        </div>
        <article className={`${cx("card detail-card")} detail-card`}>
          <h2>Status Timeline</h2>
          <Activity
            title="Transaction Completed"
            copy="Funds successfully settled in merchant account. Sep 27, 2024, 11:32"
          />
          <Activity
            title="Processing"
            copy="Card authorization was approved. Sep 27, 2024, 11:30"
          />
          <Activity
            title="Initiated"
            copy="Payment request received from checkout. Sep 27, 2024, 11:28"
          />
        </article>
      </div>
      <article
        className={`${cx("card detail-card related-ledger")} detail-card related-ledger`}
      >
        <h2>Related Customer Ledger Entries</h2>
        <div className={`${cx("table-wrap")} table-wrap`}>
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Gateway Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Settled At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#TXN-7102</td>
                <td>Visa Card (*4582)</td>
                <td>$120.00</td>
                <td>
                  <Badge>Completed</Badge>
                </td>
                <td>Aug 15, 2024 10:14</td>
              </tr>
              <tr>
                <td>#TXN-5921</td>
                <td>Direct PayPal Link</td>
                <td>$350.00</td>
                <td>
                  <Badge>Completed</Badge>
                </td>
                <td>Jul 02, 2024 16:50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
}

function BookingDetails({
  id,
  avatarSources,
}: {
  id: string;
  avatarSources: string[];
}) {
  const booking = bookings.find((row) => row[0] === id);
  return (
    <>
      <div className={`${cx("detail-hero card")} detail-hero`}>
        <span
          className={`${cx("back-mark calendar-mark")} back-mark calendar-mark booking-hero-icon-hook`}
        >
          <img src="/vector.png" alt="vector" />{" "}
        </span>
        <div>
          <h1 className="booking-id-title-hook">Booking {id}</h1>
          <h2 className="booking-service-title-hook">
            {booking?.[2] ?? "Strategy Consultation"}
          </h2>
          <p className="booking-schedule-hook">
            Virtual Consultation Room · Scheduled for Oct 15, 2024 at 14:00
          </p>
        </div>
        <div className="flex gap-2">
          <Badge>Confirmed</Badge>
          <Badge>Completed</Badge>
        </div>
        <span className={`${cx("detail-actions")} detail-actions`}>
          <button
            className={`${cx("secondary detail-outline-action")} detail-reschedule-hook`}
          >
            <CalendarDays size={12} /> Reschedule
          </button>
          <button
            className={`${cx("danger detail-outline-action")} detail-danger-action-hook`}
          >
            Cancel Booking
          </button>
        </span>
      </div>
      <div className={`${cx("detail-columns")} detail-columns`}>
        <div className={`${cx("detail-stack")} detail-stack`}>
          <article className={`${cx("card detail-card")} detail-card`}>
            <h2>Booking Meeting Logistics</h2>
            <div className={`${cx("detail-lines")} detail-lines`}>
              <span>
                Service Type<b>Business Consultation</b>
              </span>
              <span>
                Scheduled Date<b>October 15, 2024</b>
              </span>
              <span>
                Meeting Time<b>2:00 PM – 3:30 PM (EST)</b>
              </span>
              <span>
                Meeting Location
                <b className={cx("link-value booking-link-value-hook")}>
                  Virtual · Zoom Link Provided
                </b>
              </span>
              <span className={cx("booking-note-row booking-note-row-hook")}>
                Client Special Notes
                <b className={cx("booking-note-copy")}>
                  Need assistance with expanding our payment gateway options and
                  preparing our database backup plans.
                </b>
              </span>
            </div>
          </article>
          <article
            className={`${cx("card detail-card customer-summary")} detail-card`}
          >
            <h2>Customer Overview</h2>
            <div className={cx("customer-row")}>
              <span className={cx("detail-customer-avatar-wrap")}>
                <span className={cx("avatar")}>SJ</span>
                {avatarSources.length > 0 && (
                  <img
                    className={cx("avatar detail-customer-avatar")}
                    src={avatarSources[0]}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </span>
              <span>
                <b>Sarah Johnson</b>
                <small>sarah.johnson@example.com</small>
              </span>
              <small className={cx("booking-count")}>
                12 Total Bookings Completed
              </small>
            </div>
          </article>
        </div>
        <div className={`${cx("detail-stack")} detail-stack`}>
          <article className={`${cx("card detail-card")} detail-card`}>
            <h2>Payment Ledger Breakdown</h2>
            <div className={`${cx("detail-lines")} detail-lines`}>
              <span>
                Billing Amount<b>$180.00</b>
              </span>
              <span className={cx("booking-payment-status-hook")}>
                Payment Status<Badge>Paid</Badge>
              </span>
              <span>
                Invoice Link
                <b className={cx("link-value booking-link-value-hook")}>
                  INV-10294
                </b>
              </span>
            </div>
          </article>
          <article className={`${cx("card detail-card")} detail-card`}>
            <h2>Booking Lifecycle Log</h2>
            <Activity
              title="Confirmation Sent"
              copy="Outlook invite dispatched · Oct 12, 10:28"
            />
            <Activity
              title="Status Set to Confirmed"
              copy="Consultant assigned automatically · Oct 12, 10:28"
            />
            <Activity
              title="Booking Created"
              copy="Client self-service reservation · Oct 12, 10:28"
            />
          </article>
        </div>
      </div>
    </>
  );
}
