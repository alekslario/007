import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useDispatch } from "react-redux";
import { useGeolocation } from "../hooks/useGeolocation";
import { useQueryWeather, defaultParams } from "../hooks/useQueryWeather";

import Main from "../pages/Main";
import SettingsPage from "../pages/SettingsPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";
setupIonicReact();

const App = () => {
  const dispatch = useDispatch();
  const [lat, lon] = useGeolocation();
  const weather = useQueryWeather({ lat, lon });
  // const address = useGetAddress(location?.latitude, location?.longitude);

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
      })
    );
  }, [weather]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
