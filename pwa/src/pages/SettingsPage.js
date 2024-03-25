import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import PageWrapper from "../components/PageWrapper.js";
import Settings from "../components/Settings.js";
import { darkTheme } from "../global.js";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { IconChevronLeft } from "@tabler/icons-react";
import ActionButton from "../components/ActionButton.js";

const GoBack = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SettingsPage = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          "--background": darkTheme.backgroundColor,
        }}
      >
        <PageWrapper>
          <GoBack>
            <ActionButton style={{ position: "unset" }}>
              <IconChevronLeft onClick={() => history.goBack()} />
            </ActionButton>
          </GoBack>
          <Settings />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
