import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { darkTheme } from "../global";
import { getTime } from "../utils/utils";
import { useSelector } from "react-redux";
export const MuiChart = () => {
  const data = useSelector((state) => state.data);
  const { hourly } = data?.data || {};
  const { temperature_2m = [], time = [] } = hourly || {};

  // filter historic data and show only present and future up to 48 hours
  const now = new Date().getTime();
  const filteredTime = time
    .map((t) => new Date(t))
    .filter((t) => t > now && t < now + 24 * 60 * 60 * 1000)
    .sort((a, b) => a - b);

  //slice the temperature data to match the filtered time
  const filteredTemperature = temperature_2m.slice(0, filteredTime.length);
  console.log(filteredTime);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `100%`,
        width: `100%`,
      }}
    >
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
      />
    </div>
  );
};

export default MuiChart;

// xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
//     series={[
//       {
//         data: [2, 5.5, 2, 8.5, 1.5, 5],
//       },
//     ]}
