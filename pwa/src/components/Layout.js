import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import styled from "@emotion/styled";

import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";

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
import { StoreProvider } from "../utils/store.js";
setupIonicReact();

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20;
`;
const App = () => (
  <IonApp>
    <IonReactRouter>
      <StoreProvider>
        <IonRouterOutlet>
          <Route exact path="/">
            <PageWrapper>
              <Tab1 />
            </PageWrapper>
          </Route>
          <Route exact path="/settings">
            <PageWrapper>
              {" "}
              <Tab2 />
            </PageWrapper>
          </Route>
        </IonRouterOutlet>
      </StoreProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
