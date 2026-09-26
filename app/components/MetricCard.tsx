import { cx } from "../lib/cx";
import Image from "next/image";
export default function MetricCard({
  label,
  value,
  change,
  icon,
  negative = false,
  hideChange = false,
  hideIcon = false,
}: {
  label: string;
  value: string;
  change: string;
  icon: string;
  negative?: boolean;
  hideChange?: boolean;
  hideIcon?: boolean;
}) {
  return (
    <article className={cx("metric card")}>
      <div className={cx("metric-top")}>
        <span>{label}</span>
        {!hideIcon && (
          <span className={`${cx("metric-icon")} metric-icon-hook`}>
            {icon.startsWith("/") ? (
              <Image src={icon} alt="" width={24} height={24} />
            ) : (
              icon
            )}
          </span>
        )}
      </div>
      <strong>{value}</strong>
      {!hideChange && (
        <div className={`${cx("metric-foot")} metric-foot-hook`}>
          <span className={cx(negative ? "down" : "up")}>
            {negative ? "↓" : "↑"} {change}
          </span>
          <small>vs last month</small>
        </div>
      )}
    </article>
  );
}
