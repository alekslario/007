import React, { useRef, useEffect } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { darkTheme } from "../global";
// import redux route to get current path
import { useLocation } from "react-router-dom";
export const BottomDrawer = ({ children }) => {
  const location = useLocation();
  const modal = useRef(null);
  useEffect(() => {
    if (location.pathname !== "/") {
      modal.current.dismiss();
    } else {
      modal.current.present();
    }
  }, [location.pathname]);

  return (
    <IonModal
      style={{
        "--ion-background-color": darkTheme.backgroundColor,
      }}
      ref={modal}
      initialBreakpoint={0.35}
      isOpen={true}
      breakpoints={[0.35, 0.95]}
      backdropDismiss={false}
      showBackdrop={false}
      backdropBreakpoint={0.35}
    >
      <IonContent className="ion-padding">{children}</IonContent>
    </IonModal>
  );
};

export default BottomDrawer;
