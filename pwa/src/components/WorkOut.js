import React, { useState } from "react";
import Exercises from "./Exercises.js";
import styled from "styled-components";
const Image = styled.div`
  width: 100%;
  height: 40%;
`;
export default () => {
  const [{ state }, setState] = useState({ state: "workout" });
  const handleStart = () => {
    setState((prev) => ({ ...prev, state: "workout" }));
  };
  return (
    <div>
      {state === "default" && (
        <>
          <Image>
            <img src="./images/runner.png" alt="" />
          </Image>
          <p>Start the workout, pick the exercise and get going.</p>
          <p>
            Your first exercise will trigger the workout start automatically
          </p>
          <p>Time between exercises will count as breaks and downtime</p>
          <button>Never show again</button>
          <br />
          <button onClick={handleStart}>Start</button>
        </>
      )}
      {state === "workout" && <Exercises />}
    </div>
  );
};
