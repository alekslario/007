import React, { useEffect, useState, useRef } from "react";
import {
  Platform,
  Text,
  View,
  Dimensions,
  Button,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Overlay,
  UrlTile,
  Marker,
} from "react-native-maps";
import customMapStyle from "../styles/custom-map.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Map = ({ lon, lat }) => {
  const [overlayUrl, setOverlayUrl] = useState("");
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
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

  const scrollToLocation = (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 2.0922,
          longitudeDelta: 2.0421,
        },
        1000 // Animation duration in milliseconds
      );
    }
  };

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
        ref={mapRef}
        initialRegion={{
          latitude: lon,
          longitude: lat,
          latitudeDelta: 2.0922,
          longitudeDelta: 2.0421,
        }}
        showsTraffic={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
        showsUserLocation={false} // Turn off default blue dot
      >
        {maps.length > 0 && (
          <UrlTile
            urlTemplate={`https://tilecache.rainviewer.com/v2/radar/${maps[count].path}/512/{z}/{x}/{y}/2/1_1.png`}
            tileSize={512}
            opacity={0.2}
          />
        )}
      </MapView>

      <Pressable
        style={({ pressed }) => ({
          ...styles.button,
          ...{ opacity: pressed ? 0.5 : 1 },
        })}
        onPress={() => scrollToLocation(lon, lat)}
      >
        <Image
          source={require("../assets/target.png")}
          style={{ width: 32, height: 32 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    ...GlobalStyles.lightTheme,
    position: "absolute",
    top: "60%",
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    opacity: 0.5,
  },
});
