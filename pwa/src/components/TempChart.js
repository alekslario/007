import React from "react";
import Chart from "react-apexcharts";
import { darkTheme } from "../global";
import { useSelector } from "react-redux";
const defaultOptions = {
  chart: {
    height: 350,
    type: "area",
    offsetX: -12,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.95,
    },
  },
  xaxis: {
    lines: {
      show: false,
    },
  },
  yaxis: {
    lines: {
      show: true,
    },
    labels: {
      style: {
        colors: darkTheme.seconDaryText, // Change y-axis labels color to red
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    labels: {
      style: {
        colors: darkTheme.seconDaryText, // Change y-axis labels color to red
      },
    },
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  colors: [darkTheme.mainText],
};

const series = [
  {
    name: "series1",
    data: [],
  },
];

export const TempChart = () => {
  const data = useSelector((state) => state.data);
  const { hourly } = data?.data || {};
  const { temperature_2m = [], time = [] } = hourly || {};

  // filter historic data and show only present and future up to 48 hours
  const now = new Date().getTime();
  const filteredTime = time
    .filter(
      (t) =>
        new Date(t).getTime() > now &&
        new Date(t).getTime() < now + 24 * 60 * 60 * 1000
    )
    .sort((a, b) => new Date(a) - new Date(b));

  //slice the temperature data to match the filtered time
  const filteredTemperature = temperature_2m.slice(0, filteredTime.length);

  const options = {
    ...defaultOptions,
    xaxis: { ...defaultOptions.xaxis, categories: filteredTime },
  };
  const series = [
    {
      name: "series1",
      data: filteredTemperature,
    },
  ];

  return (
    <>
      {" "}
      {temperature_2m && (
        <div
          style={{
            backgroundColor: darkTheme.card,
            display: "flex",
            padding: "5px",
            margin: "20px",
            borderRadius: "20px",
            flexDirection: "column",
          }}
        >
          <Chart options={options} series={series} type="line" />
        </div>
      )}
    </>
  );
};

export default TempChart;
