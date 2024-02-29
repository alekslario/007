import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Main.css";
import Main from "../components/Main.js";
import PageWrapper from "../components/PageWrapper.js";
const Tab1 = () => {
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <PageWrapper>
          <Main />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
