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
  const time = getTime(milliseconds);
  const dayOfTheWeek = DAYS[date.getDay()];
  const day = date.getDate();
  return [`${day} ${dayOfTheWeek}`, `${time}`];
};

const getTime12h = (milliseconds) => {
  const date = new Date(milliseconds);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hours to 12-hour format

  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
};

const getTime24h = (milliseconds) => {
  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
};

export const toFahrenheit = (celsius) => {
  return Math.round((celsius * 9) / 5 + 32);
};

export const getTime = (milliseconds, format = "24h") => {
  return format === "24h" ? getTime24h(milliseconds) : getTime12h(milliseconds);
};

export const getTimeArray = (size) => {
  let milliseconds = Date.now();
  //round to the nearest 10 minutes
  milliseconds -= milliseconds % (1000 * 60 * 10);

  return new Array(size).fill(0).map((_, i) => {
    const currentM = milliseconds + i * (1000 * 60 * 10);
    // const date = new Date(currentM);
    // get hours and minutes;
    return getTime(currentM);
  });
};

export const firstLetterUppercase = (string) => {
  // assume that the string might be in style of the camelCase
  const [first, last] = string.split(/(?=[A-Z])/);
  // if the last exist, there are 2 words
  if (last) {
    return (
      first.charAt(0).toUpperCase() + first.slice(1) + " " + last.toLowerCase()
    );
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const dbzToRain = (dbz) => {
  return 0.036 * 10 ** (0.0625 * dBZ);
};
