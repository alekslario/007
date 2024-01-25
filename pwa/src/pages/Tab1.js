import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import WorkOut from "../components/WorkOut.js";
import { useQueryWeather } from "../hooks/useQueryWeather.js";
import "./Tab1.css";
import { List } from "../components/List.js";
import Main from "../components/Main.js";
import dummy_data from "../dummy-data.json";
import { useStore } from "../utils/store.js";

const Tab1 = () => {
  const weather = useQueryWeather();
  const { hourly, current } = dummy_data || {};
  const { time, temperature_2m } = hourly || {};
  const { temperature_2m: temperature_2m_current } = current || {
    temperature_2m: 0,
  };

  const [_, dispatch] = useStore();

  useEffect(() => {
    if (!temperature_2m_current) return;
    const valMap = time.reduce((acc, curr, index) => {
      acc[curr] = temperature_2m[index];
      return acc;
    }, {});
    dispatch({
      type: "SET_DATES",
      dates: valMap,
      current: temperature_2m_current,
    });
  }, [temperature_2m_current]);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <Main />
          <List data={time} />
          <div className="other"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
