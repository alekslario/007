import * as React from "react";
const UVindex = ({ fill = "#2C2727", ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.125 12.5h1.042m16.666 0h1.042M5.833 5.833l.73.73m12.604-.73-.73.73M8.334 12.5a4.167 4.167 0 1 1 8.334 0M12.5 4.167V3.125m1.042 13.542 2.083 5.208h1.042l2.083-5.208m-12.5 0v3.125a2.083 2.083 0 0 0 4.167 0v-3.125"
    />
  </svg>
);
export default UVindex;
