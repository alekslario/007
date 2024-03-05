import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './MainPage.css';
import PageWrapper from '../components/PageWrapper.js';
import WeatherData from '../components/WeatherData.js';
import MainInfo from '../components/MainInfo.js';
import { darkTheme } from '../global.js';
import TempChart from '../components/TempChart.js';
import BottomDrawer from '../components/BottomDrawer.js';
import Map from '../components/Map.js';
import { useSelector } from 'react-redux';
const MainPage = () => {
  const { lon, lat } = useSelector((state) => state.data);
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    const isDismissed = () => {
      setShowInput(false);
    };
    document.addEventListener('ionModalDidDismiss', isDismissed);
    return () => document.removeEventListener('ionModalDidDismiss', isDismissed);
  }, []);
  return (
    <IonPage>
      <IonContent
        fullscreen={true}
        style={{
          '--background': darkTheme.backgroundColor,
          // '--overflow': 'hidden',
        }}
      >
        <PageWrapper style={{ padding: '0px' }}>
          {lat && lon && <Map lat={lat || 0} lon={lon || 0} setShowInput={setShowInput} />}
          <MainInfo />
          <TempChart />
          <WeatherData />
          <BottomDrawer show={showInput} />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
