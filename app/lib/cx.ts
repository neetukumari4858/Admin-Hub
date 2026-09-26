import { legacyUtilities } from "./legacy-utilities";

export function cx(...values: unknown[]) {
  return values
    .filter((value): value is string => typeof value === "string")
    .flatMap((value) => value.split(/\s+/))
    .filter(Boolean)
    .map((value) => {
      const utilities = legacyUtilities[value] ?? value;
      if (value === "tw-global") {
        return utilities
          .replace(
            "[font-family:Arial,_Helvetica,_sans-serif]",
            "[font-family:'Inter_Variable',_ui-sans-serif,_system-ui,_sans-serif]",
          )
          .replace("[font-size:13px]", "[font-size:14px]");
      }
      if (value === "page-heading") {
        return `${utilities} [&_h1]:!text-[32px] [&_p]:!text-[13px]`;
      }
      if (value === "transaction-page-heading") {
        return `${utilities} [&_h1]:!text-[32px] [&_p]:!text-[13px]`;
      }
      if (value === "card-heading") {
        return `${utilities} [&_h2]:!text-[20px] max-[760px]:[&_h2]:!text-[11px]`;
      }
      if (value === "detail-card") {
        return `${utilities} [&_h2]:!text-[16px] max-[760px]:[&_h2]:!text-[11px]`;
      }
      if (value === "danger") {
        return utilities.replace("[background:#fff]", "[background:white]");
      }
      return utilities;
    })
    .join(" ");
}
