import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./MainPage.css";
import Main from "../components/Main.js";
import PageWrapper from "../components/PageWrapper.js";
import WeatherData from "../components/WeatherData.js";
import MainInfo from "../components/MainInfo.js";
import { darkTheme } from "../global.js";
import TempChart from "../components/TempChart.js";
const MainPage = () => {
  return (
    <IonPage>
      <IonContent
        fullscreen={true}
        style={{
          "--background": darkTheme.backgroundColor,
        }}
      >
        <PageWrapper style={{ padding: "0px" }}>
          <Main />
          <MainInfo />
          <TempChart />
          <WeatherData />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
