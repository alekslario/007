import React from "react";
import { useHistory } from "react-router-dom";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { home } from "ionicons/icons";
import { useStore } from "../utils/store.js";
import { fab_states } from "../fab_states.js";

export default () => {
  const [
    {
      fab: { action_name, cb, disabled },
    },
    dispatch,
  ] = useStore();
  const history = useHistory();
  const defaultCb = () => {
    history.push("/");
  };

  return (
    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton
        disabled={disabled}
        onClick={fab_states[action_name] ? cb : defaultCb}
      >
        {fab_states[action_name] || <IonIcon aria-hidden="true" icon={home} />}
      </IonFabButton>
    </IonFab>
  );
};
