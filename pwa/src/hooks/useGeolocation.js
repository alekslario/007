import React, { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [{ lat, lon }, setCoords] = useState({ lat: null, lon: null });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);
  return [lat, lon];
};

export default useGeolocation;
