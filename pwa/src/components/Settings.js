import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mantine/core";
import { firstLetterUppercase } from "../utils/utils";
import { setPreferences } from "../utils/store";
import { darkTheme } from "../global"; // Assuming you have a GlobalStyles module

const ClickAble = ({ text, handleClick, active, last, first }) => {
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
              backgroundColor: darkTheme.active,
            }
          : {
              backgroundColor: darkTheme.secondaryBackgroundColor,
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
                color: darkTheme.backgroundColor,
              }
            : {
                color: darkTheme.seconDaryText,
              }),
        }}
      >
        {text}
      </span>
    </Button>
  );
};

const StackedSettings = ({ data }) => {
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
                backgroundColor: darkTheme.backgroundColor,
                marginBottom: 1,
                ...(index === 0
                  ? {
                      borderTopLeftRadius: darkTheme.borderRadius,
                      borderTopRightRadius: darkTheme.borderRadius,
                    }
                  : {}),
                ...(index === Object.keys(data).length - 1
                  ? {
                      borderBottomLeftRadius: darkTheme.borderRadius,
                      borderBottomRightRadius: darkTheme.borderRadius,
                    }
                  : {}),
              }}
            >
              <span
                style={{
                  color: darkTheme.mainText,
                  marginBottom: 10,
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
  return (
    <div style={styles.scrollView}>
      <span
        style={{
          marginTop: 20,
          color: darkTheme.seconDaryText,
          fontSize: 14,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        PREFERENCES
      </span>
      <StackedSettings data={{ ...rest }} />
      <span
        style={{
          marginTop: 20,
          color: darkTheme.seconDaryText,
          fontSize: 14,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        APPEARANCE
      </span>
      <StackedSettings data={{ theme: uiTheme }} />
      {/* serves as padding */}
      <div style={{ height: 100 }}></div>
    </div>
  );
}

const styles = {
  scrollView: {
    flex: 1,
    backgroundColor: darkTheme.secondaryBackgroundColor,
    margin: "0 20px",
    position: "relative",
    padding: 5,
    borderRadius: 10,
  },
  preferences: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  preferenceName: {},
};
