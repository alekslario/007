import React, { useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";

import PageWrapper from "../components/PageWrapper.js";
import { darkTheme } from "../global.js";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { IconChevronLeft } from "@tabler/icons-react";
import ActionButton from "../components/ActionButton.js";
import AddAddress from "../components/AddAddress.js";

const GoBack = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AddressPage = () => {
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
          <AddAddress />
        </PageWrapper>
      </IonContent>
    </IonPage>
  );
};

export default AddressPage;
