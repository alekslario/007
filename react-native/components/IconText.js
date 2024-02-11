import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const IconText = ({ children, text, number, units }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      {children}
      <Text style={styles.text}>{text}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",

          alignItems: "flex-end",
        }}
      >
        <Text style={styles.number}>{number}</Text>
        <Text> </Text>
        <Text style={styles.units}>{units}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "left",
    flexDirection: "row",

    width: "100%",
  },
  text: {
    color: "#888888",
  },
  units: { color: "#888888" },
  number: { fontSize: 18 },
});
