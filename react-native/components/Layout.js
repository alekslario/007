import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useGeolocation } from "../hooks/useGeolocation";
import { useQueryWeather } from "../hooks/useQueryWeather";
import { useGetAddress } from "../hooks/useGetAddress";
import { useStore } from "../util/store.js";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { TimeSelector, TopMain } from "./index.js";
import { ChartOne } from "./LineChart";
import TimeS from "./TimeSelector.js";
// import { Map } from "./Map.js";
import { Map } from "./MapBox.js";

export default function Layout() {
  const [_, dispatch] = useStore();

  const location = useGeolocation();
  const weather = useQueryWeather(location);
  const lon = location?.latitude;
  const lat = location?.longitude;
  // const address = useGetAddress(location?.latitude, location?.longitude);

  useEffect(() => {
    if (!weather) return;
    // make days' weather map
    const { hourly, current } = weather;
    const { temperature_2m, time } = current;
    const { time: time_hourly, temperature_2m: temperature_2m_hourly } = hourly;
    const weatherMap = time_hourly.reduce((acc, cur, idx) => {
      acc[Date.parse(cur)] = temperature_2m_hourly[idx];
      return acc;
    }, {});

    dispatch({
      type: "SET_DATA",
      data: weather,
      weatherMap,
      currentTemperature: temperature_2m,
      currentTime: Date.parse(time),
    });
  }, [weather]);

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
        {lat && lon && <Map lat={lat} lon={lon} />}
        <TopMain />
        <TimeSelector />

        <ChartOne />
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.lightTheme,
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
});
