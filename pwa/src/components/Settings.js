import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { firstLetterUppercase } from "../utils/utils";
import { setPreferences } from "../utils/store";
import { darkTheme, lightTheme } from "../global"; // Assuming you have a GlobalStyles module

const ClickAble = ({ text, handleClick, active, last, first, theme }) => {
  return (
    <Button
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        borderRadius: 0,
        ...(active === text
          ? {
              backgroundColor: theme.active,
            }
          : {
              backgroundColor: theme.backgroundColor,
            }),

        ...(first
          ? { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
          : {}),
        ...(last
          ? { borderTopRightRadius: 10, borderBottomRightRadius: 10 }
          : {}),
      }}
      onClick={() => handleClick(text)}
    >
      <span
        style={{
          fontFamily: "Roboto-Regular",
          ...(active === text
            ? {
                color: theme.backgroundColor,
              }
            : {
                color: theme.seconDaryText,
              }),
        }}
      >
        {text}
      </span>
    </Button>
  );
};

const StackedSettings = ({ data, theme }) => {
  const dispatch = useDispatch();
  return (
    <div style={styles.preferences}>
      {Object.entries(data).map(([key, value], index) => {
        const { selected, options } = value;
        return (
          <div key={index} style={styles.preferenceName}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 13,

                backgroundColor: theme.secondaryBackgroundColor,
                marginBottom: 1,
                ...(index === 0
                  ? {
                      borderTopLeftRadius: theme.borderRadius,
                      borderTopRightRadius: theme.borderRadius,
                    }
                  : {}),
                ...(index === Object.keys(data).length - 1
                  ? {
                      borderBottomLeftRadius: theme.borderRadius,
                      borderBottomRightRadius: theme.borderRadius,
                    }
                  : {}),
              }}
            >
              <span
                style={{
                  color: theme.mainText,
                  marginBottom: "10px",
                  fontFamily: "Roboto-Regular",
                }}
              >
                {firstLetterUppercase(key)}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                {options.map((option, index) => (
                  <ClickAble
                    key={index}
                    text={option}
                    handleClick={() => {
                      dispatch(
                        setPreferences({
                          [key]: {
                            ...value,
                            selected: option,
                          },
                        })
                      );
                    }}
                    active={selected}
                    first={index === 0}
                    last={index === options.length - 1}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Settings({ navigation }) {
  const preferences = useSelector((state) => state.preferences);
  const { theme: uiTheme, ...rest } = preferences;
  const theme = uiTheme.selected === "dark" ? darkTheme : lightTheme;
  return (
    <div style={styles.scrollView}>
      <h1
        style={{
          marginTop: 20,
          color: theme.secondaryText,
          fontSize: 18,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        PREFERENCES
      </h1>
      <StackedSettings data={{ ...rest }} theme={theme} />
      <h1
        style={{
          marginTop: 20,
          color: theme.secondaryText,
          fontSize: 18,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        APPEARANCE
      </h1>
      <StackedSettings data={{ theme: uiTheme }} theme={theme} />
      {/* serves as padding */}
      <div style={{ height: 100 }}></div>
    </div>
  );
}

const styles = {
  scrollView: {
    flex: 1,
    // backgroundColor: darkTheme.secondaryBackgroundColor,

    position: "relative",

    borderRadius: 10,
  },
  preferences: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  preferenceName: {},
};
