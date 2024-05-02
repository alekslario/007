import React from "react";
import { darkTheme, lightTheme } from "../global";
import { useSelector } from "react-redux";

import styled from "@emotion/styled";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 1000000000000000000;
`;

export const LoadingScreen = () => {
  const preferences = useSelector((state) => state.preferences);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  return (
    <Screen theme={theme}>
      <svg
        class="m_5ae2e3c mantine-Loader-root"
        style={{ width: "100px", height: "100px", stroke: "3px" }}
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
        stroke={theme.active}
      >
        <g
          fill="none"
          fill-rule="evenodd"
          transform="translate(1 1)"
          stroke-width="2"
        >
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate
              attributeName="r"
              begin="1.5s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-opacity"
              begin="1.5s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-width"
              begin="1.5s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle cx="22" cy="22" r="6" stroke-opacity="0">
            <animate
              attributeName="r"
              begin="3s"
              dur="3s"
              values="6;22"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-opacity"
              begin="3s"
              dur="3s"
              values="1;0"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="stroke-width"
              begin="3s"
              dur="3s"
              values="2;0"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.5s"
              values="6;1;2;3;4;5;6"
              calcMode="linear"
              repeatCount="indefinite"
            ></animate>
          </circle>
        </g>
      </svg>
    </Screen>
  );
};

export default LoadingScreen;