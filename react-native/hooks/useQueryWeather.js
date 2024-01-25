import { useEffect, useState } from "react";
export const useQueryWeather = (location) => {
  const { latitude: lat, longitude: lon } = location || {};
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (!location) return;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [location]);
  return weather || null;
};
