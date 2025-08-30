const formatDate = (dateString: string): { time: string; date: string } => {
  const date = new Date(dateString);

  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const dateFormatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return { time, date: dateFormatted };
};
export { formatDate };
