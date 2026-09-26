import { cx } from "../lib/cx";
export default function ProfilePage() {
  return (
    <div className={cx("profile-page")}>
      <article className={cx("card profile-identity")}>
        <div className={cx("avatar profile-avatar")}>SJ</div>
        <div>
          <h2>Sarah Jenkins</h2>
          <p>sarah.jenkins@adminhub.com</p>
          <span>Super Admin</span>
        </div>
        <button className={cx("secondary")}>Edit Profile</button>
      </article>
      <article className={cx("card profile-details")}>
        <h2>Personal Information</h2>
        <dl>
          <div>
            <dt>Full Name</dt>
            <dd>Sarah Jenkins</dd>
          </div>
          <div>
            <dt>Email Address</dt>
            <dd>sarah.jenkins@adminhub.com</dd>
          </div>
          <div>
            <dt>Phone Number</dt>
            <dd>+1 555-0123</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Super Admin</dd>
          </div>
        </dl>
      </article>
      <article className={cx("card profile-details")}>
        <h2>Account Security</h2>
        <dl>
          <div>
            <dt>Two-Factor Authentication</dt>
            <dd>Enabled</dd>
          </div>
          <div>
            <dt>Last Login</dt>
            <dd>Today, 14:24</dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
