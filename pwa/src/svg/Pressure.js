import * as React from "react";
const Pressure = ({ fill = "#2C2727", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M21.555 18.053a9.375 9.375 0 1 0-18.11 0"
    />
    <path
      stroke={fill}
      strokeWidth={2}
      d="M13.298 16.232c.507.74.15 1.867-.798 2.518-.948.652-2.128.581-2.635-.157-.542-.788-2.41-5.216-3.545-7.956-.214-.515.417-.949.823-.564 2.15 2.041 5.614 5.372 6.155 6.16Z"
    />
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.5 6.25v2.083m-6.63.663 1.474 1.473m11.785-1.473-1.473 1.473m3.9 7.583-2.012-.54m-16.1.54 2.012-.54"
    />
  </svg>
);
export default Pressure;
