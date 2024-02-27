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

const getXY = ({ northEast, southWest }, width, height, lat, lon) => {
  const north = toRadians(northEast.latitude);
  const south = toRadians(southWest.latitude);
  const east = toRadians(northEast.longitude);
  const west = toRadians(southWest.longitude);
  // Coordinates above are a subsection of Oakland, CA

  let mapWidth = width; // Assign your map width here
  let mapHeight = height; // Assign your map height here

  function toRadians(deg) {
    return (deg * Math.PI) / 180;
  }

  function mercatorY(lat) {
    return Math.log(Math.tan(lat / 2 + Math.PI / 4));
  }

  function locationToPixel(lat, lon) {
    lat = toRadians(lat);
    lon = toRadians(lon);
    const ymin = mercatorY(south);
    const ymax = mercatorY(north);
    const xFactor = mapWidth / (east - west);
    const yFactor = mapHeight / (ymax - ymin);

    let y = mercatorY(lat);
    let x = (lon - west) * xFactor;
    y = (ymax - y) * yFactor;
    return [x, y];
  }

  return locationToPixel(lat, lon);
};
export const Map = ({ lon, lat }) => {
  const [zoom, setZoom] = useState(
    Math.round(Math.log(360 / 10.0421) / Math.LN2)
  );
  const [overlayUrl, setOverlayUrl] = useState("");
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [maps, setMaps] = useState([]);
  const [coords, setCoords] = useState(null);

  const [boundingBox, setBoundingBox] = useState(null);
  useEffect(() => {
    const bound = async () => {
      return await mapRef.current.getMapBoundaries();
    };
    if (mapRef.current) {
      bound().then((boundaries) => {
        console.log(boundaries);
        setBoundingBox(boundaries);
        ``;
      });
    }
  }, [zoom]);

  useEffect(() => {
    if (boundingBox === null) return;

    const res = getXY(boundingBox, windowWidth, windowHeight * 0.7, lat, lon);
    setCoords(res);
  }, [boundingBox]);

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

  useEffect(() => {}, []);

  const scrollToLocation = (latitude, longitude) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 10.0922,
          longitudeDelta: 10.0421,
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
  {
    /* <UrlTile
            urlTemplate={`https://tilecache.rainviewer.com/v2/radar/${maps[count].path}/512/{z}/{x}/{y}/2/1_1.png`}
            tileSize={512}
            opacity={0.2}
          /> */
  }

  const getZoom = async () => {
    let coords = await mapRef.current.getCamera();

    setZoom(coords.zoom); // sets variable zoom the value under coords.center.zoom
  };

  let xtile = 0;
  let ytile = 0;

  //  {
  //    maps.length > 0 && (
  //      <UrlTile
  //        urlTemplate={`https://tilecache.rainviewer.com/v2/radar/${maps[count].path}/512/{z}/{x}/{y}/2/1_1.png`}
  //        tileSize={512}
  //        opacity={0.2}
  //      />
  //    );
  //  }
  console.log(zoom);
  console.log(coords);
  return (
    <View style={{ flex: 1, width: windowWidth, height: windowHeight * 0.7 }}>
      <MapView
        onRegionChange={async () => {
          await getZoom();
        }}
        style={{ flex: 1, width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={{
          latitude: lon,
          longitude: lat,
          latitudeDelta: 10.0922,
          longitudeDelta: 10.0421,
        }}
        showsTraffic={false}
        showsBuildings={false}
        customMapStyle={customMapStyle}
        showsUserLocation={false} // Turn off default blue dot
      >
        {coords && (
          <UrlTile
            urlTemplate={`https://tile.openweathermap.org/map/precipitation_new/0/0/0.png?appid=0dc3ce6cf50014a8adc95cfd39ef6d2c`}
            tileSize={512}
            opacity={0.9}
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
    position: "absolute",
    top: "60%",
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    opacity: 0.5,
  },
});
