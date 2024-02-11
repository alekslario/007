import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const CloudCover = (props) => {
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
        d="M15.625 3.516a8.993 8.993 0 00-7.91 4.722 6.64 6.64 0 10-.684 13.246h8.594a8.984 8.984 0 100-17.968zm0 15.625H7.031a4.297 4.297 0 11-.177-8.594A8.97 8.97 0 006.64 12.5a1.172 1.172 0 102.343 0 6.64 6.64 0 116.641 6.64z"
        fill="#2C2727"
      />
    </Svg>
  );
};
