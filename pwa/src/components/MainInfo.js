import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// Remove React Native specific imports
import { formatDate, getTime } from "../utils/utils";
import { useGetAddress } from "../hooks/useGetAddress";

import { darkTheme } from "../global";
export const MainInfo = () => {
  const { currentTemperature, currentTime, lon, lat } = useSelector(
    (state) => state.data
  );

  const weather = currentTemperature;
  const [date, hours] = formatDate(currentTime);

  const address = useGetAddress({ lon, lat });
  console.log("address", address, lon, lat);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: darkTheme.mainText,
        padding: "20px",
        // minHeight: window.innerHeight * 0.8,
      }}
    >
      <div>{address}</div>
      <div style={styles.container}>
        <div style={styles.weather}>{weather}°</div>
        <div style={styles.weather}>C</div>
      </div>
      <div style={styles.dateContainer}>
        <div style={styles.date}>{date}</div>
        &nbsp;
        <div style={styles.date}>{`${getTime(Date.now())}`}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",

    alignItems: "center",

    justifyContent: "left",
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
  },
  date: {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default MainInfo;
