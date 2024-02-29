import { useState, useEffect } from "react";

export const useGetLatLon = (address) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (!address) return;

    const getLocation = async () => {
      return fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          address
        )}`
      );
    };

    // This function will be invoked after 500ms of inactivity
    const timer = setTimeout(() => {
      // Perform your desired effect here
      return getLocation()
        .then((response) => response.json())
        .then((data) => {
          setState(data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }, 700);

    // Cleanup function to clear the timeout if the dependency changes before the timeout

    return () => clearTimeout(timer);
  }, [address]);

  return state?.results || [];
};
