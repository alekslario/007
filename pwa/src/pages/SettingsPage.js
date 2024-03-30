import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import PageWrapper from "../components/PageWrapper.js";
import Settings from "../components/Settings.js";
import { darkTheme, lightTheme } from "../global.js";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { IconChevronLeft } from "@tabler/icons-react";
import ActionButton from "../components/ActionButton.js";
import { useSelector } from "react-redux";

const GoBack = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SettingsPage = () => {
  const [preferences] = useSelector((state) => [state.preferences]);
  const history = useHistory();
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          "--background": theme.backgroundColor,
        }}
      >
        <PageWrapper>
          <GoBack>
            <ActionButton style={{ position: "unset" }} theme={theme}>
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
