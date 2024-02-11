const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const formatDate = (milliseconds) => {
  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dayOfTheWeek = DAYS[date.getDay()];
  const day = date.getDate();
  return [`${day} ${dayOfTheWeek}`, `${hours}:00`];
};
