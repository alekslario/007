import React, { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import PageWrapper from "../components/PageWrapper.js";
import WeatherData from "../components/WeatherData.js";
import MainInfo from "../components/MainInfo.js";
import { darkTheme, lightTheme } from "../global.js";

import BottomDrawer from "../components/BottomDrawer.js";
import Map from "../components/Map.js";
import { useSelector } from "react-redux";
import MuiChart from "../components/MuiChart.js";

const MainPage = () => {
  const [{ current, options, selectedIndex }, preferences] = useSelector(
    (state) => [state.location, state.preferences]
  );
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const [showInput, setShowInput] = useState(false);
  const { lat, lon } = selectedIndex > 0 ? options[selectedIndex - 1] : current;
  useEffect(() => {
    const isDismissed = () => {
      setShowInput(false);
    };
    document.addEventListener("ionModalDidDismiss", isDismissed);
    return () =>
      document.removeEventListener("ionModalDidDismiss", isDismissed);
  }, []);

  const handleScroll = (e) => {
    const node = document.querySelector(".base-Popper-root");
    if (node) {
      node.style.display = "none";
    }
  };
  return (
    <IonPage>
      <IonContent
        scrollEvents={true}
        onIonScroll={handleScroll}
        fullscreen={true}
        style={{
          "--background": theme.backgroundColor,
          // '--overflow': 'hidden',
        }}
      >
        <PageWrapper style={{ padding: "0px" }}>
          {lat && lon && (
            <Map lat={lat || 0} lon={lon || 0} setShowInput={setShowInput} />
          )}
          <MainInfo />
          <MuiChart />
          <WeatherData />
          <BottomDrawer show={showInput} />
          {/* the only way to add padding. Capacitor, wtf? */}
          <div style={{ height: "100px", width: "100%", color: "transparent" }}>
            a
          </div>
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default MainPage;
