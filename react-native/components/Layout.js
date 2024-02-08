import React, { useEffect } from "react";
import { View } from "react-native";
import { useGeolocation } from "../hooks/useGeolocation";
import { useQueryWeather } from "../hooks/useQueryWeather";
import { useStore } from "../util/store.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router/stack";
import Main from "./Main";
import LocationShare from "./LocationShare";
import Privacy from "./Privacy";

const Stack = createNativeStackNavigator();

export default function Layout() {
  const [_, dispatch] = useStore();

  const location = useGeolocation();
  const weather = useQueryWeather(location);
  const lon = location?.latitude;
  const lat = location?.longitude;
  // const address = useGetAddress(location?.latitude, location?.longitude);

  useEffect(() => {
    if (!weather) return;
    // make days' weather map
    const { hourly, current } = weather;
    const { temperature_2m, time } = current;
    const { time: time_hourly, temperature_2m: temperature_2m_hourly } = hourly;
    const weatherMap = time_hourly.reduce((acc, cur, idx) => {
      acc[Date.parse(cur)] = temperature_2m_hourly[idx];
      return acc;
    }, {});

    dispatch({
      type: "SET_DATA",
      data: weather,
      weatherMap,
      currentTemperature: temperature_2m,
      currentTime: Date.parse(time),
    });
  }, [weather]);

  return (
    <GestureHandlerRootView>
      <Stack>
        {/* <Stack.Screen name="LocationShare" component={LocationShare} /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          // options={{ title: "Welcome" }}
          initialParams={{ lon, lat }}
        />
        {/* <Stack.Screen name="Privacy" component={Privacy} /> */}

        {/* <Stack.Screen
            name="Privacy"
            component={Badges}
            // options={{ title: "Welcome" }}
          /> */}
      </Stack>
    </GestureHandlerRootView>
  );
}
