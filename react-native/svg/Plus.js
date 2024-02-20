import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const Plus = (props) => {
  return (
    <Svg
      width={31}
      height={32}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.996 17.276l-6.25.05.051 6.25a1.25 1.25 0 01-2.5.02l-.05-6.25-6.25.052a1.25 1.25 0 11-.02-2.5l6.25-.051-.052-6.25a1.25 1.25 0 012.5-.02l.051 6.25 6.25-.051a1.25 1.25 0 11.02 2.5z"
        fill="#000"
      />
    </Svg>
  );
};

export default Plus;
