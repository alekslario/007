import { useStore } from "../util/store";
import Pointer from "../svg/Pointer";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { formatDate } from "../util/formatDate";
export const TopMain = () => {
  const [
    { selectedDay, currentTemperature, weatherMap, currentTime },
    dispatch,
  ] = useStore();

  const weather = weatherMap[selectedDay] ?? currentTemperature;
  const [date, hours] = formatDate(selectedDay || currentTime);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        minHeight: Dimensions.get("window").height * 0.8,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.weather}>{weather}</Text>
        <Text>C°</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text> </Text>
        <Text style={styles.date}>{hours}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
    flexDirection: "row",

    width: "100%",
  },
  weather: {
    fontSize: 70,
    fontWeight: "bold",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
