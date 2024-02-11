import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Pressure = (props) => {
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
        d="M21.555 18.053a9.375 9.375 0 10-18.11 0"
        stroke="#2C2727"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M13.298 16.232c.507.74.15 1.867-.798 2.518-.948.652-2.128.581-2.635-.157-.542-.788-2.41-5.216-3.545-7.956-.214-.515.417-.949.823-.564 2.15 2.041 5.614 5.372 6.155 6.16z"
        stroke="#2C2727"
        strokeWidth={2}
      />
      <Path
        d="M12.5 6.25v2.083m-6.63.663l1.474 1.473m11.785-1.473l-1.473 1.473m3.9 7.583l-2.012-.54m-16.1.54l2.012-.54"
        stroke="#2C2727"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
