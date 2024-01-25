import { useEffect, useState } from "react";
export const useQueryWeather = () => {
  const [{ lat, lon }, setLocation] = useState({ lat: 0, lon: 0 });
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (lat === 0 && lon === 0) return;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [lat]);
  return weather;
};
