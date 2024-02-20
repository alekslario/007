import React, { useEffect } from "react";
import { StyleSheet, Pressable, Image, View, Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { TimeSelector, TopMain } from "./index.js";
import { ChartOne } from "./LineChart";
import { WeatherData } from "./WeatherData";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { Plus } from "../svg/Plus";
import { Circle } from "../svg/Circle";
import { AddressSearch } from "./AddressSearch";
import { useSelector } from "react-redux";

import { Map } from "./Map.js";
// get width
const windowWidth = Dimensions.get("window").width;
export default function Main({ route, navigation }) {
  const { options } = useSelector((state) => state.location);
  const { lat, lon } = route.params;
  console.log("options", options);
  return (
    <GestureHandlerRootView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          top: 20,
          zIndex: 10000,
          width: windowWidth,
          padding: 20,
        }}
      >
        <AddressSearch />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {options.map(({ lat, lon, name }, index) => {
            return <Circle key={index} style={{ marginRight: 10 }} />;
          })}
          {/* <Circle style={{ marginLeft: 10 }} /> */}
        </View>

        <Button
          onPress={() => navigation.navigate("Settings", {})}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            source={require("../assets/settings.png")}
            style={{ width: 4, height: 18 }}
          />
        </Button>
      </View>

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
