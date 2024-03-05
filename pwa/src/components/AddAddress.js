import React, { useState } from "react";
import styled from "@emotion/styled";
import { IonSearchbar } from "@ionic/react";
import { darkTheme } from "../global.js";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AddAddress = () => {
  const [state, setState] = useState("");
  return (
    <Wrapper>
      <IonSearchbar
        style={{
          "--background": darkTheme.card,
          color: `${darkTheme.primaryText} !important`,
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
