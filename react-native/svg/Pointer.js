import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Pointer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="50px"
    height="50px"
    {...props}
  >
    <Path
      fill="#7364CE"
      d="M9.695.083C7.176.064 4.754 1.109 2.959 2.989 1.163 4.87.142 7.431.119 10.112c-.02 2.19.636 4.328 1.867 6.083 0 0 .257.366.299.418L9.5 25.822l7.357-9.086c.038-.048.301-.408.301-.408l.001-.003a10.425 10.425 0 0 0 1.959-6.048c.017-2.68-.965-5.26-2.731-7.17C14.62 1.195 12.213.108 9.695.083ZM9.59 13.87a3.311 3.311 0 0 1-1.914-.636 3.643 3.643 0 0 1-1.26-1.661 3.899 3.899 0 0 1-.18-2.126 3.751 3.751 0 0 1 .96-1.875 3.39 3.39 0 0 1 1.776-.99 3.262 3.262 0 0 1 1.994.226c.63.284 1.165.76 1.54 1.368.375.608.572 1.32.567 2.048a3.8 3.8 0 0 1-1.033 2.59 3.352 3.352 0 0 1-2.45 1.056Z"
    />
  </Svg>
);
export default Pointer;
