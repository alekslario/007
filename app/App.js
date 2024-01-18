import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import "./globals.js";
import "react-native-url-polyfill/auto";
import { useGeolocation } from "./hooks/useGeolocation";
import { useQueryWeather } from "./hooks/useQueryWeather";
import { fetchWeather } from "./util/fetchWeather";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Item = ({ item, onPress, backgroundColor, textColor }) => {
  const [date, time] = item.date.split("T");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  const dayOfWeek = DAYS[new Date(item.date).getDay()];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor, height: "50px" }]}
    >
      {hour === "00" ? (
        <>
          <View style={{ flexDirection: "column" }}>
            <Text>{dayOfWeek}</Text>
            <Text style={[styles.title, { color: textColor }]}>
              {hour + "   "}
            </Text>
          </View>
        </>
      ) : (
        <View style={{ flexDirection: "column" }}>
          <Text>{"  "}</Text>
          <Text
            style={[styles.title, { color: textColor }]}
            onLayout={({ nativeEvent }) => {
              console.log(nativeEvent.layout);
            }}
          >
            {hour + "   "}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function App() {
  // fetchWeather();
  const location = useGeolocation();
  const weather = useQueryWeather(location);
  const {
    current: { temperature_2m, wind_speed_10m },
    hourly,
  } = weather || { current: {} };
  const { time, temperature_2m: temperature_2m_hourly } = hourly || {
    time: [],
    temperature_2m: {},
  };

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      {temperature_2m ? (
        <Text>Current temperature is </Text>
      ) : (
        <Text>Fetching data...</Text>
      )}
      <View style={{ height: 100 }}>
        <FlatList
          data={time.map((t, i) => ({ id: i, date: t }))}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          showsHorizontalScrollIndicator={false}
          onScroll={(e) => {
            console.log(e.nativeEvent.contentOffset.x);
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
