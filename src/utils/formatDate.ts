const formatDate = (dateString: string): { time: string; date: string } => {
  const date = new Date(dateString);

  // Format time as 12:05PM
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  // Format date as Dec 16, 2023
  const dateFormatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return { time, date: dateFormatted };
};
export { formatDate };
