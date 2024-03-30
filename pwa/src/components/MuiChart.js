import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { darkTheme } from "../global";
import { getTime, toFahrenheit } from "../utils/utils";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;
export const MuiChart = () => {
  const { data, preferences } = useSelector((state) => ({
    data: state.data,
    preferences: state.preferences,
  }));
  const { hourly } = data?.data || {};
  const { temperature_2m = [], time = [] } = hourly || {};

  // filter historic data and show only present and future up to 48 hours
  const now = new Date().getTime();
  const filteredTime = time
    .map((t) => new Date(t))
    .filter((t) => t > now && t < now + 24 * 60 * 60 * 1000)
    .sort((a, b) => a - b);

  //slice the temperature data to match the filtered time
  const filteredTemperature = temperature_2m
    .slice(0, filteredTime.length)
    .map((t) =>
      preferences.temperatureUnit.selected === "C" ? t : toFahrenheit(t)
    );
  const handleClickInside = () => {
    const node = document.querySelector(".base-Popper-root");
    if (node && node.style.display === "none") {
      // with some delay to prevent flickering
      setTimeout(() => {
        node.style.display = "block";
      }, 100);
    }
  };
  return (
    <ChartWrapper onClick={handleClickInside}>
      <LineChart
        xAxis={[
          {
            id: "Time",
            data: filteredTime,
            scaleType: "time",
            valueFormatter: (date) => getTime(date.getTime()),
          },
        ]}
        series={[
          {
            showMark: ({ index }) => index % 4 === 0,
            data: filteredTemperature,
          },
        ]}
        width={500}
        height={300}
        tooltip={{ trigger: "axis" }}
      />
    </ChartWrapper>
  );
};

export default MuiChart;
