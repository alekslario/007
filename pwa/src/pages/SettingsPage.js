import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Settings.css";
import PageWrapper from "../components/PageWrapper.js";
import Settings from "../components/Settings.js";
const SettingsPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageWrapper>
          <Settings />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
