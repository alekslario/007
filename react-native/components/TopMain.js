import { useStore } from "../util/store";
import Pointer from "../svg/Pointer";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { formatDate } from "../util/formatDate";
import { useGetAddress } from "../hooks/useGetAddress";

export const TopMain = ({ lon, lat }) => {
  const [
    { selectedDay, currentTemperature, weatherMap, currentTime },
    dispatch,
  ] = useStore();

  const weather =
    weatherMap[selectedDay]?.["temperature_2m"] ?? currentTemperature;
  const [date, hours] = formatDate(selectedDay || currentTime);

  const address = useGetAddress({ lon, lat });

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 20,
        // minHeight: Dimensions.get("window").height * 0.8,
      }}
    >
      <Text>{address}</Text>
      <View style={styles.container}>
        <Text style={styles.weather}>{weather}°</Text>
        <Text style={styles.weather}>C</Text>
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

    justifyContent: "left",
    flexDirection: "row",

    width: "100%",
  },
  weather: {
    fontSize: 40,
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
