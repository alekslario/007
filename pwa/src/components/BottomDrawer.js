import React, { useRef, useState, useEffect } from "react";
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
  IonButtons,
  IonSearchbar,
} from "@ionic/react";
import { darkTheme, lightTheme } from "../global";
import { useGetLatLon } from "../hooks/useGetLatLon";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, removeLocation } from "../utils/store";
import { ActionIcon } from "@mantine/core";
import { IconMoodEmptyFilled, IconTrashFilled } from "@tabler/icons-react";
export const BottomDrawer = ({ show }) => {
  const modal = useRef(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [{ options }, preferences] = useSelector((state) => [
    state.location,
    state.preferences,
  ]);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  useEffect(() => {
    if (!document) return;
    const setState = (e) => {
      const data = e.detail.value;
      setValue(data);
    };
    document.addEventListener("ionInput", setState);
    return () => document.removeEventListener("ionInput", setState);
  }, []);
  const matchedLocations = useGetLatLon(value);

  return (
    <IonModal
      style={{
        "--ion-background-color": theme.secondaryBackgroundColor,
      }}
      ref={modal}
      initialBreakpoint={0.65}
      isOpen={show}
    >
      {" "}
      <IonHeader>
        {" "}
        <IonToolbar
          style={{
            position: "sticky",
            "--background": theme.secondaryBackgroundColor,
          }}
        >
          <IonButtons slot="end">
            <IonButton color="light" onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonSearchbar
          style={{
            "--background": theme.card,
            "--color": theme.mainText,
            "--icon-color": theme.active,
            "--clear-button-color": theme.active,
            "--border-radius": "10px",
          }}
          placeholder="Search"
        ></IonSearchbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ul
          style={{
            overflow: "scroll",
          }}
        >
          {matchedLocations.map((location, index) => {
            const { latitude, longitude, admin1, name } = location;
            return (
              <IonItem
                key={index}
                style={{
                  "--color": theme.mainText,
                }}
              >
                <IonLabel
                  onClick={() => {
                    dispatch(
                      addLocation({
                        lat: latitude,
                        lon: longitude,
                        name: `${name}, ${admin1}`,
                      })
                    );
                    setValue("");
                    modal.current?.dismiss();
                  }}
                >
                  <h2>{name}</h2>
                  <p>{admin1}</p>
                </IonLabel>
              </IonItem>
            );
          })}
          {matchedLocations.length === 0 && (
            <>
              {options.length > 0 && (
                <p
                  style={{
                    color: theme.mainText,
                  }}
                >
                  Your saved locations
                </p>
              )}
              <IonList style={{ height: "100%" }}>
                {options.map(({ lon, lat, name }, index) => {
                  return (
                    <IonItem
                      key={index}
                      onClick={() => {
                        dispatch(removeLocation(name));
                        modal.current?.dismiss();
                      }}
                      style={{
                        "--color": theme.mainText,
                      }}
                    >
                      <IonLabel>
                        <h2>{name}</h2>
                      </IonLabel>
                      <ActionIcon>
                        <IconTrashFilled />
                      </ActionIcon>
                    </IonItem>
                  );
                })}
              </IonList>
            </>
          )}
        </ul>
        <div style={{ height: "300px" }}></div>
      </IonContent>
    </IonModal>
  );
};

export default BottomDrawer;
