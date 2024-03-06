import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setCash } from '../utils/store';
export const defaultParams = [
  'temperature_2m',
  'relative_humidity_2m',
  'dew_point_2m',
  'apparent_temperature',
  'precipitation_probability',
  'precipitation',
  'rain',
  'showers',
  'snowfall',
  'weather_code',
  'surface_pressure',
  'cloud_cover',
  'visibility',
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
  'soil_temperature_0cm',
  'soil_moisture_0_to_1cm',
  'uv_index',
  'is_day',
  'sunshine_duration',
];

export const useQueryWeather = () => {
  const {
    cash,
    location: { current, selectedIndex, options },
  } = useSelector((state) => {
    return { cash: state.cash, location: state.location };
  });

  const { lat, lon } = [current, ...options][selectedIndex];

  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (lat === null) return;
    //get current lon lat
    if (cash[lat + '' + lon]) {
      setWeather(null);
      dispatch(setData(cash[lat + '' + lon]));
      return;
    }

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&hourly=${defaultParams.join(
        ','
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.current) setWeather(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [lat, lon, selectedIndex]);

  useEffect(() => {
    if (!weather) return;

    // make days' weather map

    const { hourly, current } = weather;
    const { temperature_2m: currentTemp, time: currentTime } = current;

    const { time } = hourly;
    const weatherMap = time.reduce((acc, cur, idx) => {
      const milliseconds = Date.parse(cur);
      acc[milliseconds] = {};
      defaultParams.forEach((param) => {
        acc[milliseconds][param] = hourly[param][idx];
      });

      return acc;
    }, {});

    dispatch(
      setData({
        data: weather,
        weatherMap,
        currentTemperature: currentTemp,
        currentTime: Date.parse(currentTime),
        lon,
        lat,
      })
    );
    dispatch(
      setCash({
        key: lat + '' + lon,
        data: {
          data: weather,
          weatherMap,
          currentTemperature: currentTemp,
          currentTime: Date.parse(currentTime),
          lon,
          lat,
        },
      })
    );
  }, [weather]);
};
