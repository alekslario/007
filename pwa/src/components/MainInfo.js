import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Remove React Native specific imports
import { formatDate, getTime, toFahrenheit } from "../utils/utils";
import { darkTheme, lightTheme } from "../global";
import styled from "@emotion/styled";
import EmblaCarousel from "./EmblaCarousel";
import { Row } from "./Flex";
import { ActionIcon } from "@mantine/core";
import { IconCaretLeft, IconCaretRight } from "@tabler/icons-react";
import { SwipeIndicator } from "./SwipeIndicator";

export const MainInfo = () => {
  const {
    data: { currentTemperature, currentTime },
    location: { selectedIndex, options },
    preferences,
  } = useSelector((state, preferences) => {
    return {
      data: state.data,
      location: state.location,
      preferences: state.preferences,
    };
  });
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const weather = currentTemperature;
  const [date, hours] = formatDate(currentTime);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: theme.mainText,
        padding: "0px 20px 20px 20px",

        // minHeight: window.innerHeight * 0.8,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "6px",
        }}
      >
        {options.length > 0 &&
          Array.from({ length: options.length + 1 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                margin: "0 3px",
                backgroundColor:
                  index === selectedIndex ? theme.active : theme.mainText,
              }}
            ></div>
          ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "6px",
        }}
      >
        {/* {options.length > 0 && (
          <ActionIcon>
            <IconCaretLeft />
          </ActionIcon>
        )} */}
        {/* {options.length > 0 && <SwipeIndicator />} */}
        <EmblaCarousel />
        {/* {options.length > 0 && (
          <ActionIcon>
            <IconCaretRight />
          </ActionIcon>
        )} */}
      </div>

      <Row>
        <div style={styles.container}>
          <div style={styles.weather}>
            {preferences.temperatureUnit.selected === "C"
              ? weather
              : toFahrenheit(weather)}
            °
          </div>
          <div style={styles.weather}>
            {preferences.temperatureUnit.selected}
          </div>
        </div>
        {/* <div style={styles.dateContainer}>
          <div style={{ ...styles.dateContainer, ...styles.date }}>{date}</div>
          &nbsp;
          <div style={styles.date}>{`${getTime(
            Date.now(),
            preferences.timeFormat.selected
          )}`}</div>
        </div> */}
      </Row>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",

    alignItems: "center",

    justifyContent: "center",
    flexDirection: "row",

    width: "100%",
  },
  weather: {
    fontSize: " 40px",
    fontWeight: "bold",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    textWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default MainInfo;
