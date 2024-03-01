import * as React from "react";
const Humidity = ({ fill = "#2C2727", props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={fill}
      d="M12.872 8.588 7.693.34a.812.812 0 0 0-1.323 0L1.167 8.628A7.801 7.801 0 0 0 0 12.5a7.031 7.031 0 1 0 14.063 0 7.862 7.862 0 0 0-1.191-3.912Zm-5.84 9.38a5.476 5.476 0 0 1-5.47-5.468 6.233 6.233 0 0 1 .952-3.08l.73-1.165 7.87 7.87a5.451 5.451 0 0 1-4.083 1.843Z"
    />
  </svg>
);
export default Humidity;
