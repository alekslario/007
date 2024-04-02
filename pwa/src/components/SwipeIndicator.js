import React from "react";
import { Arrow } from "../svg/Arrow";
import styled from "@emotion/styled";
const Wave = styled.div`
  margin-left: 10px;
  .wave-item {
    animation: waveOpacity 2s ease infinite alternate;
  }

  /* Adjust the animation delay for each item */
  .wave-item0 {
    animation-delay: 0s;
  }

  .wave-item1 {
    animation-delay: 0.5s; /* Half of the animation duration */
  }

  .wave-item2 {
    animation-delay: 1s; /* Equal to the animation duration */
  }

  .wave-item3 {
    animation-delay: 1.5s; /* 1.5 times the animation duration */
  }

  @keyframes waveOpacity {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;
export const SwipeIndicator = () => {
  return (
    <div
      className="row"
      style={{
        justifyContent: "center",
        marginBottom: "-5px",
        marginTop: "10px",
      }}
    >
      <Wave
        className="row"
        style={{
          rotate: "180deg",
        }}
      >
        {[0, 0, 0].map((_, index) => {
          return (
            <Arrow key={index} className={`wave-item wave-item${index}`} />
          );
        })}
      </Wave>
      <Wave className="row">
        {[0, 0, 0].map((_, index) => {
          return (
            <Arrow key={index} className={`wave-item wave-item${index}`} />
          );
        })}
      </Wave>
    </div>
  );
};
