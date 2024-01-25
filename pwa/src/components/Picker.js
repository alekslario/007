import React from "react";
import { IonItem, IonLabel, IonInput } from "@ionic/react";

export default ({ handleSelection, defaultVal }) => {
  return (
    <>
      <IonInput
        onIonChange={handleSelection}
        value={defaultVal}
        inputmode="numeric"
        style={{
          width: "100px",
          textAlign: "center",
        }}
      ></IonInput>
    </>
  );
};
