import React, { useRef } from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonSearchbar,
} from '@ionic/react';
import { darkTheme } from '../global';
export const BottomDrawer = ({ show }) => {
  const modal = useRef(null);

  const handleSearch = () => {
    modal.current?.setCurrentBreakpoint(0.75);
  };
  return (
    <IonModal
      style={{
        '--ion-background-color': darkTheme.secondaryBackgroundColor,
      }}
      trigger="open-modal"
      ref={modal}
      initialBreakpoint={0.25}
      breakpoints={[0, 0.25, 0.5, 0.75]}
      isOpen={show}
    >
      <IonContent className="ion-padding">
        <IonSearchbar
          style={{
            '--background': darkTheme.card,
            '--color': darkTheme.mainText,
            '--icon-color': darkTheme.active,
            '--clear-button-color': darkTheme.active,
            '--border-radius': '10px',
          }}
          onClick={handleSearch}
          placeholder="Search"
        ></IonSearchbar>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default BottomDrawer;
