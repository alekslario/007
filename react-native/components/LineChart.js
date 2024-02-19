import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useSelector } from "react-redux";
import React, { useState } from "react";
export const ChartOne = () => {
  const { weatherMap, selectedDay } = useSelector((state) => state.data);
  const [chartParentWidth, setChartParentWidth] = useState(0);
  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 12,
                Math.random() * 15,
                Math.random() * 20,
                Math.random() * 25,
              ],
            },
          ],
        }}
        width={chartParentWidth - 40}
        height={220}
        yAxisLabel=""
        yAxisSuffix="C°"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `#2C2727`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#7967EF",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          ...styles.graph,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  graph: {
    width: "50%",
  },
});
