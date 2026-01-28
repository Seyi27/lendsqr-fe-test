export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}
