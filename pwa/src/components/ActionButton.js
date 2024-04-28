import { ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";

export const ActionButton = styled(ActionIcon)`
  position: absolute;
  bottom: 20px;
  right: 15px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.card};
  padding: 5px;
  width: 40px;
  height: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  /* border-radius: 50%; */
  svg {
    fill: ${({ theme }) => theme.active};
  }
  svg path {
    stroke: ${({ theme, disabled }) =>
      disabled ? theme.backgroundColor : theme.active};
    fill: ${({ theme, disabled }) =>
      disabled ? theme.backgroundColor : theme.active};
  }
  &:active {
    background-color: ${({ theme }) => theme.card};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.card};
    border: initial;
  }
  &:hover {
    background-color: ${({ theme }) => theme.card};
    opacity: 0.8;
  }
  ${({ customCss }) => customCss}
`;

export default ActionButton;
