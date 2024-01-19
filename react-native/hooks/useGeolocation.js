import { useState, useEffect } from "react";
import * as Location from "expo-location";

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setLocationError("Location permission denied");
          return;
        }

        const response = await Location.getCurrentPositionAsync({});
        setLocation(response);
      } catch (error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);
  return location?.coords;
};
