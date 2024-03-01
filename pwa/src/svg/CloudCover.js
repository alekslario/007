import * as React from "react";
const CloudCover = ({ fill = "#2C2727", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill={fill}
      d="M15.625 3.516a8.993 8.993 0 0 0-7.91 4.722 6.64 6.64 0 1 0-.684 13.246h8.594a8.984 8.984 0 0 0 0-17.968Zm0 15.625H7.03a4.297 4.297 0 1 1-.178-8.594A8.97 8.97 0 0 0 6.64 12.5a1.172 1.172 0 1 0 2.344 0 6.64 6.64 0 1 1 6.64 6.64Z"
    />
  </svg>
);
export default CloudCover;
