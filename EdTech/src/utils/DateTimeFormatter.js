function DateTimeFormatter(isoString) {
  // Create a Date object from the ISO 8601 string
  const date = new Date(isoString);

  // Extract components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  // Format the date time string
  const formattedDateTime = {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}`,
  };
  return formattedDateTime;
}

export default DateTimeFormatter;
