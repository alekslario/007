import React, { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useGeolocation } from "../hooks/useGeolocation";
import { useQueryWeather, defaultParams } from "../hooks/useQueryWeather";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./Main";
import LocationShare from "./LocationShare";
import Privacy from "./Privacy";
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

const theme = GlobalStyles.lightTheme;

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
export default function Layout() {
  const dispatch = useDispatch();
  const location = useGeolocation();
  const weather = useQueryWeather(location);
  const lon = location?.longitude;
  const lat = location?.latitude;
  // const address = useGetAddress(location?.latitude, location?.longitude);

  useEffect(() => {
    if (!weather) return;
    // make days' weather map
    const { hourly, current } = weather;
    const { temperature_2m: currentTemp, time: currentTime } = current;

    const { time } = hourly;
    const weatherMap = time.reduce((acc, cur, idx) => {
      const milliseconds = Date.parse(cur);
      acc[milliseconds] = {};
      defaultParams.forEach((param) => {
        acc[milliseconds][param] = hourly[param][idx];
      });

      return acc;
    }, {});

    dispatch(
      setData({
        data: weather,
        weatherMap,
        currentTemperature: currentTemp,
        currentTime: Date.parse(currentTime),
      })
    );
  }, [weather]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     ...GlobalStyles.lightTheme,
        //     headerTitleAlign: "center",
        //     headerShadowVisible: false,
        //   },
        // }}
        screenOptions={({ route, navigation }) => ({
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.secondaryBackgroundColor,
          },
        })}
      >
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <Stack.Screen
          name="LocationShare"
          component={LocationShare}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          // options={{ title: "Welcome" }}
          initialParams={{ lon: lat, lat: lon }}
          options={{
            headerShown: false, // change this to `false`
          }}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          // options={{ title: "Welcome" }}
          // initialParams={{ lon: lat, lat: lon }}
        />

        {/* <Stack.Screen
            name="Badges"
            component={Badges}
            // options={{ title: "Welcome" }}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
