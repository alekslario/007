import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Pointer from "../svg/Pointer";
import { useStore } from "../util/store";

const TODAY = new Date();
const windowWidth = Dimensions.get("window").width;
const CELL_WIDTH = 20;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const LEFT_OFFSET = 12;
const getDays = () => {
  const CURRENT_TIME = new Date().setMinutes(0, 0, 0);
  //get array with 25 days
  // 24 hours * 15 days  1 day is an offset
  const DAYS_ARRAY = new Array(24 * 16).fill(0).map((_, i) => {
    // 1 hour is an offset
    const HOUR_OFFSET = (i - LEFT_OFFSET) * 60 * 60 * 1000;
    //padd dates with some offset in front
    return CURRENT_TIME + HOUR_OFFSET;
  });

  return DAYS_ARRAY;
};

const days = getDays();

export const TimeSelector = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [state, dispatch] = useStore();

  const index = Math.floor((scrollOffset - 35 + windowWidth / 2) / CELL_WIDTH);

  useEffect(() => {
    if (index - LEFT_OFFSET < 0) return;

    dispatch({ type: "SET_SELECTED_DAY", date: days[index] });
  }, [index]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute", left: "50%" }}>
        <Pointer />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,

          elevation: 2,
        }}
      >
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={false}
          onScroll={(e) => {
            console.log("ddd");
            setScrollOffset(e.nativeEvent.contentOffset.x);
          }}
          scrollEventThrottle={0}
          contentOffset={{ x: (LEFT_OFFSET - 7) * CELL_WIDTH, y: 0 }}
        >
          {days.map((milliseconds, i) => {
            const date = new Date(milliseconds);
            const disabled = date < TODAY;
            const day = date.getDate();
            let hour = date.getHours();
            const dayOfWeek = DAYS[date.getDay()];
            hour = hour < 10 ? "0" + hour : hour;
            return (
              <View
                key={i}
                style={{
                  paddingTop: 30,
                  // backgroundColor: "transparent",
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    top: 6,
                    width: 100,
                    left: 3,
                    color: "#888888",
                  }}
                >
                  {hour === "00" ? `${dayOfWeek} ${day}` : ""}
                </Text>

                <Text
                  style={{
                    width: CELL_WIDTH,
                    color: disabled ? "#888888" : "#000000",
                    // backgroundColor: index === i ? "#7364CE" : "transparent",
                  }}
                >
                  {" "}
                  {hour % 4 === 0 ? hour : ""}
                </Text>

                <Text
                  style={{
                    position: "absolute",
                    top: 27,
                    width: 100,
                    left: 38,
                    color: "#888888",
                  }}
                >
                  {hour % 4 === 0 ? ". . . ." : ""}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    ...GlobalStyles.lightTheme,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    position: "relative",
    paddingTop: 10,
    paddingBottom: 30,
  },
  text: {
    fontSize: 42,
  },
});

export default TimeSelector;
