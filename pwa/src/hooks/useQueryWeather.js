import { useEffect, useState } from "react";

export const defaultParams = [
  "temperature_2m",
  "relative_humidity_2m",
  "dew_point_2m",
  "apparent_temperature",
  "precipitation_probability",
  "precipitation",
  "rain",
  "showers",
  "snowfall",
  "weather_code",
  "surface_pressure",
  "cloud_cover",
  "visibility",
  "wind_speed_10m",
  "wind_direction_10m",
  "wind_gusts_10m",
  "soil_temperature_0cm",
  "soil_moisture_0_to_1cm",
  "uv_index",
  "is_day",
  "sunshine_duration",
];

export const useQueryWeather = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (lat === null) return;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=${defaultParams.join(
        ","
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }, [location]);
  return weather || null;
};
