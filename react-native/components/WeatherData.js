import { useSelector } from "react-redux";
import {
  Humidity,
  Precipitation,
  Pressure,
  CloudCover,
  FeelsLike,
  DrewPoint,
  Wind,
  UVindex,
} from "../svg/index";
import Pointer from "../svg/Pointer";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { formatDate } from "../util/formatDate";
import { useGetAddress } from "../hooks/useGetAddress";
import { IconText } from "./IconText";

// get dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const WeatherData = () => {
  const { selectedDay, currentTemperature, weatherMap, currentTime } =
    useSelector((state) => state.data);

  const data = weatherMap[selectedDay] ?? weatherMap[currentTime];

  return (
    <>
      {data && (
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              //   display: "flex",

              //   // flexDirection: "column",
              backgroundColor: "#ffffff",
              //   height: 300,
              //   width: "90%",
              //   padding: 20,
              display: "flex",
              padding: 20,
              margin: 20,
              borderRadius: 20,
            }}
          >
            <View style={styles.row}>
              <IconText
                text={"Feels like"}
                number={`${data["apparent_temperature"]}°`}
                units={"C"}
              >
                <FeelsLike />
              </IconText>
              <IconText
                text={"Precipitation"}
                number={`${data["precipitation"]}`}
                units={"h"}
              >
                <Precipitation />
              </IconText>
              <IconText
                text={"Cloud cover"}
                number={`${data["cloud_cover"]}`}
                units={"%"}
              >
                <CloudCover />
              </IconText>
            </View>

            <View style={styles.row}>
              <IconText
                text={"Wind"}
                number={`${data["wind_speed_10m"]}`}
                units={"km/h"}
              >
                <FeelsLike />
              </IconText>
              <IconText
                text={"Pressure"}
                number={`${data["surface_pressure"]}`}
                units={"mBar"}
              >
                <Pressure />
              </IconText>
              <IconText
                text={"Humidity"}
                number={`${data["relative_humidity_2m"]}`}
                units={"%"}
              >
                <Humidity />
              </IconText>
            </View>

            <View style={styles.row}>
              <IconText
                text={"Drew point"}
                number={`${data["dew_point_2m"]}°`}
                units={"C"}
              >
                <DrewPoint />
              </IconText>
              <IconText
                text={"UV index"}
                number={`${data["uv_index"]}`}
                units={"/11"}
              >
                <UVindex />
              </IconText>
              <IconText text={"UV index"} number={4} units={"/11"}>
                <UVindex />
              </IconText>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
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
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});
