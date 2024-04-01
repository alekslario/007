import React, { useState } from "react";
import styled from "@emotion/styled";
import { IonSearchbar } from "@ionic/react";
import { darkTheme, lightTheme } from "../global.js";
import { useSelector } from "react-redux";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AddAddress = () => {
  const [preferences] = useSelector((state) => [state.preferences]);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const [state, setState] = useState("");
  return (
    <Wrapper>
      <IonSearchbar
        style={{
          "--background": theme.card,
          color: `${theme.primaryText} !important`,
        }}
        onClick={() => {
          console.log("clicked");
        }}
        placeholder="Search"
      ></IonSearchbar>
    </Wrapper>
  );
};
export default AddAddress;
