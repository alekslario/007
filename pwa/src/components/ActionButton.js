import { ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";
import { darkTheme } from "../global";
export const ActionButton = styled(ActionIcon)`
  position: absolute;
  bottom: 20px;
  right: 15px;
  z-index: 1000;
  background-color: ${darkTheme.card};
  padding: 5px;
  width: 40px;
  height: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  /* border-radius: 50%; */
  svg {
    fill: ${darkTheme.active};
  }
  svg path {
    stroke: ${darkTheme.active};
    fill: ${darkTheme.active};
  }
  &:active {
    background-color: ${darkTheme.card};
  }
`;

export default ActionButton;
