import React, { useState, useEffect } from "react";
import { Slider as ManSlider, ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { darkTheme, lightTheme } from "../global";
import { getTime, getTimeArray } from "../utils/utils";
import { useSelector } from "react-redux";

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  margin-left: 20px;
  border-radius: 10px;
  /* padding: 12px; */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .mantine-Slider-thumb {
    background-color: ${({ theme }) => theme.active};
    border: 6px solid ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

    transition: all 0.2s ease-in-out;
  }
  .mantine-Slider-track {
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  }
  .mantine-Slider-bar {
    background-color: ${({ theme }) => theme.active};
    transition: all 0.2s ease-in-out;
  }
  .mantine-m0g192::before {
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  }
  .play-icons path {
    fill: ${({ theme }) => theme.active};
  }
  .mantine-Slider-root {
    width: 70%;
  }
  .mantine-Slider-label {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.mainText};
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
  background-color: ${({ theme }) => theme.card};

  border-radius: 15px;
  padding: 5px 5px 5px 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

export const Slider = ({
  overlays,
  play = false,
  time,
  sliderCallback,
  ...props
}) => {
  const [preferences] = useSelector((state) => [state.preferences]);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const timeArray = getTimeArray(overlays.length);
  const marks = timeArray.map((time, index) => {
    return { value: index + 1, label: time };
  });
  const marksMap = timeArray.reduce((acc, time, index) => {
    acc[index + 1] = time;
    return acc;
  }, {});
  return (
    <SliderContainer theme={theme}>
      <SliderWrapper theme={theme}>
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
              "background-color": theme.secondaryBackgroundColor,
              border: theme.secondaryBackgroundColor,
            },
          }}
          onChange={sliderCallback}
        />
        <Button {...props} theme={theme}>
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
