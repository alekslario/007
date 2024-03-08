import React from "react";
import { darkTheme } from "../global";

export const IconText = ({ children, text, number, units }) => {
  return (
    <div style={styles.container}>
      {children}
      <span style={styles.text}>{text}</span>
      <div style={styles.numberContainer}>
        <span style={styles.number}>{number}</span>
        &nbsp;
        <span style={{ color: darkTheme.secondaryText }}>{units}</span>
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
    color: darkTheme.secondaryText,
  },
  units: {
    color: darkTheme.secondaryText,
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
