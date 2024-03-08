import React from "react";
import { useSelector } from "react-redux";
import {
  Humidity,
  Precipitation,
  Pressure,
  CloudCover,
  FeelsLike,
  DrewPoint,
  Wind,
  UVindex,
} from "../svg/index";
import styled from "@emotion/styled";
import { IconText } from "./IconText";

import { darkTheme } from "../global";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px;
`;
export const WeatherData = () => {
  const { selectedDay, weatherMap, currentTime } = useSelector(
    (state) => state.data
  );
  const keys = Object.keys(weatherMap).sort((a, b) => a - b);
  // get first key that is over current time
  const date = keys.find((k) => k > currentTime);
  const data = weatherMap[date];
  return (
    <>
      {data && (
        <Wrapper>
          <IconText
            text={"Feels like"}
            number={`${data["apparent_temperature"]}°`}
            units={"C"}
          >
            <FeelsLike fill={darkTheme.mainText} />
          </IconText>
          <IconText
            text={"Precipitation"}
            number={`${data["precipitation"]}`}
            units={"h"}
          >
            <Precipitation fill={darkTheme.mainText} />
          </IconText>
          <IconText
            text={"Cloud cover"}
            number={`${data["cloud_cover"]}`}
            units={"%"}
          >
            <CloudCover fill={darkTheme.mainText} />
          </IconText>

          <IconText
            text={"Wind"}
            number={`${data["wind_speed_10m"]}`}
            units={"km/h"}
          >
            <Wind fill={darkTheme.mainText} />
          </IconText>
          <IconText
            text={"Pressure"}
            number={`${data["surface_pressure"]}`}
            units={"mBar"}
          >
            <Pressure fill={darkTheme.mainText} />
          </IconText>
          <IconText
            text={"Humidity"}
            number={`${data["relative_humidity_2m"]}`}
            units={"%"}
          >
            <Humidity fill={darkTheme.mainText} />
          </IconText>

          <IconText
            text={"Dew point"}
            number={`${data["dew_point_2m"]}°`}
            units={"C"}
          >
            <DrewPoint fill={darkTheme.mainText} />
          </IconText>
          <IconText
            text={"UV index"}
            number={`${data["uv_index"]}`}
            units={"/11"}
          >
            <UVindex fill={darkTheme.mainText} />
          </IconText>
          <IconText text={"UV index"} number={4} units={"/11"}>
            <UVindex fill={darkTheme.mainText} />
          </IconText>
        </Wrapper>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
};

export default WeatherData;
