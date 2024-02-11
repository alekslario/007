import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Humidity = (props) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.872 13.588L13.693 5.34a.813.813 0 00-1.323 0l-5.203 8.287A7.802 7.802 0 006 17.5a7.031 7.031 0 1014.063 0 7.862 7.862 0 00-1.191-3.912zm-5.84 9.38a5.476 5.476 0 01-5.47-5.468 6.232 6.232 0 01.952-3.08l.73-1.165 7.87 7.87a5.45 5.45 0 01-4.083 1.843z"
        fill="#2C2727"
      />
    </Svg>
  );
};
