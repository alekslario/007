import React from "react";
import { darkTheme } from "../global";
export const IconText = ({ children, text, number, units }) => {
  return (
    <div style={styles.container}>
      {children}
      <span style={styles.text}>{text}</span>
      <div style={styles.numberContainer}>
        <span style={styles.number}>{number}</span>
        <span> </span>
        <span style={styles.units}>{units}</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: darkTheme.seconDaryText,
  },
  units: {
    color: darkTheme.seconDaryText,
  },
  numberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  number: {
    fontSize: "18px",
    color: darkTheme.mainText,
  },
};

export default IconText;
