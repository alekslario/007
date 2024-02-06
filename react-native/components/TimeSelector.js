import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  StatusBar,
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
  const DAYS_ARRAY = new Array(24 * 16).fill(0).map((_, i) => {
    const HOUR_OFFSET = i * 60 * 60 * 1000;
    return CURRENT_TIME + HOUR_OFFSET;
  });
  return DAYS_ARRAY;
};

const days = getDays();

const RenderItem = React.memo(({ item, index }) => {
  const date = new Date(item);
  const disabled = date < TODAY;
  const day = date.getDate();
  let hour = date.getHours();
  const dayOfWeek = DAYS[date.getDay()];
  hour = hour < 10 ? "0" + hour : hour;

  return (
    <View style={{ paddingTop: 30, height: "100%" }}>
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
          textAlign: "center",
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
});

export const TimeSelector = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [state, dispatch] = useStore();

  // const index = Math.floor((scrollOffset - 35 + windowWidth / 2) / CELL_WIDTH);
  const selectedIndex = scrollOffset;
  useEffect(() => {
    dispatch({ type: "SET_SELECTED_DAY", date: days[selectedIndex] });
  }, [selectedIndex]);

  const renderItem = useCallback(({ item, index }) => {
    return <RenderItem item={item} index={index} />;
  }, []);

  const onViewableItemsChanged = ({ viewableItems }) => {
    setScrollOffset(viewableItems[0].index);
  };

  const viewabilityConfig = { itemVisiblePercentThreshold: 100 };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute", left: 40 }}>
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
        <FlatList
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          scrollEventThrottle={16}
          // contentOffset={{ x: (LEFT_OFFSET - 7) * CELL_WIDTH, y: 0 }}
          data={days}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          disableIntervalMomentum={true}
          decelerationRate={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  },
  scrollView: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    position: "relative",
    paddingTop: 10,
    paddingBottom: 30,
  },
});

export default TimeSelector;
