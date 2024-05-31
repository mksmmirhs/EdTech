function convertToISODate(dateString) {
  // Create a new Date object
  const date = new Date(dateString);

  // Convert to ISO string
  return date.toISOString().slice(0, 19);
}

export default convertToISODate;
