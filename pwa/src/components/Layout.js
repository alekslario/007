import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useGeolocation } from '../hooks/useGeolocation';
import { useQueryWeather, defaultParams } from '../hooks/useQueryWeather';
import { setData, addCurrentLocation } from '../utils/store';
import MainPage from '../pages/MainPage';
import SettingsPage from '../pages/SettingsPage';
import { useGetAddress } from '../hooks/useGetAddress';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';
setupIonicReact();

const App = () => {
  const dispatch = useDispatch();
  // const { selectedIndex, options, current } = useSelector((state) => state.location);
  // const { lat: savedLat, lon: savedLon } = selectedIndex > 0 ? options[selectedIndex] : current;
  const [lat, lon] = useGeolocation();
  const address = useGetAddress({ lon, lat });

  useEffect(() => {
    if (!address) return;

    dispatch(addCurrentLocation({ name: address, lat, lon }));
  }, [address]);

  useQueryWeather();

  // const address = useGetAddress(location?.latitude, location?.longitude);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <MainPage />
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
