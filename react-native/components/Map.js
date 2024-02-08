import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Overlay, UrlTile } from "react-native-maps";
import customMapStyle from "../styles/custom-map.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Map = ({ lon, lat }) => {
  const [overlayUrl, setOverlayUrl] = useState("");

  const [maps, setMaps] = useState([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const getWeatherMaps = async () => {
      const response = await fetch(
        "https://api.rainviewer.com/public/weather-maps.json"
      );
      const data = await response.json();
      // Assuming you want the latest radar data

      setMaps(data.radar.past);
    };
    getWeatherMaps();
  }, []);

  // useEffect(() => {
  //   if (maps.length === 0) return;
  //   const fetchOverlayUrl = async (array) => {
  //     try {
  //       const latestRadar = maps[0].path;
  //       // Get the URL of the latest radar image with your API key
  //       const radarUrl = `https://tilecache.rainviewer.com/v2/radar/${latestRadar}/512/{z}/{x}/{y}/2/1_1.png`;
  //       setOverlayUrl(radarUrl);
  //     } catch (error) {
  //       console.error("Error fetching RainViewer overlay:", error);
  //     }
  //   };

  //   fetchOverlayUrl();
  // }, [maps]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((count) => (count + 1) % maps.length);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [maps]);
  return (
    <View style={{ flex: 1, width: windowWidth, height: windowHeight * 0.7 }}>
      <MapView
        style={{ flex: 1, width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: lon,
          longitude: lat,
          latitudeDelta: 2.0922,
          longitudeDelta: 2.0421,
        }}
        showsTraffic={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
      >
        {maps.length > 0 && (
          <UrlTile
            urlTemplate={`https://tilecache.rainviewer.com/v2/radar/${maps[count].path}/512/{z}/{x}/{y}/2/1_1.png`}
            tileSize={512}
            opacity={0.2}
          />
        )}
      </MapView>
    </View>
  );
};
