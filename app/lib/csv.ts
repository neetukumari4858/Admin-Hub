export function downloadCsv(
  filename: string,
  headings: string[],
  rows: string[][],
) {
  const quote = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const content = [headings, ...rows]
    .map((row) => row.map(quote).join(","))
    .join("\r\n");
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/csv;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
