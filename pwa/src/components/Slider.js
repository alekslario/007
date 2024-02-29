import React, { useState, useEffect } from "react";
import { Slider as ManSlider, ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { darkTheme } from "../global";
import { getTime, getTimeArray } from "../utils/utils";

const Button = styled.button`
  width: "30px";
  height: "30px";
  background-color: ${darkTheme.secondaryBackgroundColor};
  margin-left: 20px;
  border-radius: 10px;
  padding: 6px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .mantine-Slider-thumb {
    background-color: ${darkTheme.backgroundColor};
    border: 2px solid ${darkTheme.backgroundColor};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    padding: 10px;
    transition: all 0.2s ease-in-out;
  }
  .mantine-Slider-track {
    background-color: ${darkTheme.secondaryBackgroundColor};
  }
  .mantine-Slider-bar {
    background-color: ${darkTheme.active};
    transition: all 0.2s ease-in-out;
  }
  .mantine-m0g192::before {
    background-color: ${darkTheme.secondaryBackgroundColor};
  }
  .play-icons path {
    fill: ${darkTheme.active};
  }
`;
const SliderWrapper = styled.div`
  position: absolute;
  top: -64px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${darkTheme.card};

  border-radius: 10px;
  padding: 5px 5px 5px 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Slider = ({
  overlays,
  play = false,
  time,
  sliderCallback,
  ...props
}) => {
  const timeArray = getTimeArray(overlays.length);
  const marks = timeArray.map((time, index) => {
    return { value: index + 1, label: time };
  });
  const marksMap = timeArray.reduce((acc, time, index) => {
    acc[index + 1] = time;
    return acc;
  }, {});
  return (
    <SliderContainer>
      <SliderWrapper>
        <ManSlider
          thumbSize={20}
          label={(val) => {
            console.log(val, marksMap[val]);
            return marksMap[val];
          }}
          min={1}
          step={1}
          max={overlays.length}
          labelAlwaysOn
          value={time}
          styles={{
            markLabel: { display: "none" },
            track: {
              "background-color": darkTheme.secondaryBackgroundColor,
              border: darkTheme.secondaryBackgroundColor,
            },
          }}
          onChange={sliderCallback}
        />
        <Button {...props}>
          {!play ? (
            <IconPlayerPlayFilled className="play-icons" size={16} />
          ) : (
            <IconPlayerPauseFilled className="play-icons" size={16} />
          )}
        </Button>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
