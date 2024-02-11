import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const BackArrow = (props) => {
  return (
    <Svg
      width={14}
      height={21}
      viewBox="0 0 14 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.898 10.437l8.211 8.117-2.347 2.317L.205 10.437 10.762 0l2.346 2.32-8.212 8.117.002-.001z"
        fill="#2C2727"
      />
    </Svg>
  );
};
