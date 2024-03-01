import { ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";
import { darkTheme } from "../global";
export const ActionButton = styled(ActionIcon)`
  position: absolute;
  bottom: 26px;
  right: 10px;
  z-index: 1000;
  background-color: ${darkTheme.card};
  padding: 5px;
  width: 35px;
  height: 35px;
  /* border-radius: 50%; */
`;

export default ActionButton;
