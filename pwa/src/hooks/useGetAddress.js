import { useState, useEffect } from "react";

export const useGetAddress = ({ lon, lat }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!lon || !lat) return;
    const getLocation = async () => {
      return fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.EXPO_PUBLIC_GEOLOCATION_API}`
      );
    };
    getLocation()
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [lon, lat]);
  console.log("state", state?.results);
  return state ? state.results[0].formatted_address?.split(",")[0] : null;
};
