import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useQueryWeather } from "../hooks/useQueryWeather.js";
import "./Tab1.css";
import { List } from "../components/List.js";
import Main from "../components/Main.js";
import dummy_data from "../dummy-data.json";
import { useStore } from "../utils/store.js";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
SwiperCore.use([EffectCards]);

const Tab1 = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">some content</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
