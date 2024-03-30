import React from "react";
import { darkTheme, lightTheme } from "../global";
import { useSelector } from "react-redux";

export const IconText = ({ children, text, number, units }) => {
  const preferences = useSelector((state) => state.preferences);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const styles = getStyles(theme);
  return (
    <div style={styles.container}>
      {children}
      <span style={styles.text}>{text}</span>
      <div style={styles.numberContainer}>
        <span style={styles.number}>{number}</span>
        &nbsp;
        <span style={{ color: theme.secondaryText }}>{units}</span>
      </div>
    </div>
  );
};

const getStyles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: theme.secondaryText,
  },
  units: {
    color: theme.secondaryText,
  },
  numberContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  number: {
    fontSize: "18px",
    color: theme.mainText,
  },
});

export default IconText;
