export function formatTimestampToReadableDate(isoTimestamp: string): string {
  const date = new Date(isoTimestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  return date.toLocaleDateString("en-US", options);
}
