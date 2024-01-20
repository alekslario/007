import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { IonSelect, IonSelectOption, IonButton, IonInput } from "@ionic/react";
import { SegmentedControl } from "@mantine/core";
import Carousel from "./Carousel.js";
import { useStore } from "../utils/store.js";
import Card from "./Card.js";
const Timer = styled.div`
  width: 100%;
  weight: 50px;
  margin-bottom: 60px;
`;
const Wrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  .swiper-slide {
    width: 50%;
  }
  .swiper-slide-active image {
    border: 2px solid blue;
  }
  .parent {
    background: #f3e9e9;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    scale: 0.1;
  }
  .parent[data-isOpen="true"] {
    scale: 1.2;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 100px;
  background-color: blue;
`;

export default () => {
  const [_, dispatch] = useStore();
  const [exercises, setExercises] = useState([]);
  const [exerciseImage, setExerciseImage] = useState("");
  const [status, setStatus] = useState("default");
  const [isOpen, setIsOpen] = useState(false);
  const [exerciseStatus, setExerciseStatus] = useState("started");
  useEffect(() => {
    anchor.current.scrollIntoView({ behavior: "smooth" });
  }, [status]);

  useEffect(() => {
    dispatchStart();
  }, []);

  useEffect(() => {
    if (status === "running") {
      dispatch({
        type: "SET_FAB_STATE",
        fab: {
          action_name: "exercise_end",
          disabled: false,
          cb: handleEndExercise,
        },
      });
    }
  }, [status]);

  const wrapper = useRef(null);
  const anchor = useRef(null);
  const handleStartExercise = () => {
    setExercises((prev) => [...prev, { name: "Bench press", reps: 0 }]);
    setStatus("running");
  };

  const handleEndExercise = () => {
    setStatus("default");
    dispatchStart();
  };

  const dispatchStart = () => {
    dispatch({
      type: "SET_FAB_STATE",
      fab: {
        action_name: "exercise_start",
        disabled: false,
        cb: handleStartExercise,
      },
    });
  };

  const handleSlideChange = () => {
    setTimeout(() => {
      const source = document.querySelector(".swiper-slide-active img").src;
      setExerciseImage(source);
    }, 300);
  };
  return (
    <>
      <Timer>12:34</Timer>
      <Wrapper ref={wrapper}>
        {exercises.map((exercise, index) => {
          return (
            <div key={index}>
              <Line />
            </div>
          );
        })}
        {status === "running" && (
          <>
            <p>Reps</p>
          </>
        )}
        <div ref={anchor}></div>
        {status !== "running" && (
          <>
            {/* <IonSelect aria-label="Exercise" placeholder="Select Exercise">
              <IonSelectOption value="bench-p">Bench press</IonSelectOption>
              <IonSelectOption value="shoulder-p">
                Shoulder press
              </IonSelectOption>
              <IonSelectOption value="legs">Legs</IonSelectOption>
            </IonSelect> */}
            <img src={exerciseImage} alt="Current exercise" />
            <Carousel handleSlideChange={handleSlideChange} />
            <IonInput
              value={25}
              inputmode="numeric"
              style={{
                width: "100px",
                textAlign: "center",
              }}
            ></IonInput>
            <br />
            <SegmentedControl
              data={[
                { label: "Kg", value: "kg" },
                { label: "Lbs", value: "lbs" },
              ]}
            />
            <br />

            <br />
          </>
        )}
        <Card />
      </Wrapper>
    </>
  );
};
