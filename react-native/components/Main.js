import React, { useEffect } from "react";
import { StyleSheet, Pressable, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { TimeSelector, TopMain } from "./index.js";
import { ChartOne } from "./LineChart";
import { WeatherData } from "./WeatherData";

import { Map } from "./Map.js";

export default function Main({ route, navigation }) {
  const { lon, lat } = route.params;

  return (
    <GestureHandlerRootView>
      <Pressable
        style={({ pressed }) => ({
          ...styles.settings,
          ...{ opacity: pressed ? 0.5 : 1 },
        })}
        onPress={() => navigation.navigate("Settings", {})}
      >
        <Image
          source={require("../assets/settings.png")}
          style={{ width: 4, height: 18 }}
        />
      </Pressable>
      <ScrollView style={styles.container}>
        {lat && lon && <Map lat={lat} lon={lon} />}
        <TimeSelector />
        <TopMain lon={lat} lat={lon} />

        <ChartOne />
        <ChartOne />
        <WeatherData />
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
  settings: {
    position: "absolute",
    top: 30,
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    opacity: 0.5,
    zIndex: 10000,
  },
});
