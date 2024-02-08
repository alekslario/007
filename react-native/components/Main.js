import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { TimeSelector, TopMain } from "./index.js";
import { ChartOne } from "./LineChart";

import { Map } from "./Map.js";

export default function Main({ lon, lat }) {
  return (
    <ScrollView style={styles.container}>
      {lat && lon && <Map lat={lat} lon={lon} />}
      <TopMain />
      <TimeSelector />

      <ChartOne />
    </ScrollView>
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
