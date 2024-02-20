import * as React from "react";
import Svg, { Circle as NativeCircle } from "react-native-svg";

export const Circle = (props) => {
  return (
    <Svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <NativeCircle
        cx={4.30179}
        cy={4.07102}
        r={3.5}
        transform="rotate(-.466 4.302 4.071)"
        fill="#000"
      />
    </Svg>
  );
};

export default Circle;
