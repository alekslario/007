import React from "react";
import { IonIcon, IonFabButton } from "@ionic/react";
import { home } from "ionicons/icons";
export const fab_states = {
  exercise_start: "Start",
  exercise_end: "End",
  home: (
    <IonFabButton>
      <IonIcon aria-hidden="true" icon={home} />
    </IonFabButton>
  ),
};
