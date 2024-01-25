import React, { useState, useContext, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";
import { useStore } from "../utils/store.js";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  .kek {
    height: 100px;
    width: 100px;
    background: red;
  }
`;
const Path = styled.div`
  height: 100px;
  width: 100px;
  background: red;
`;
export default () => {
  const [
    {
      fab: { action_name },
    },
    dispatch,
  ] = useStore();
  const [open, setOpen] = useState(null);
  const controls = useAnimationControls();
  useEffect(() => {
    if (action_name === "exercise_start") {
      controls.start({
        x: -97,
      });
    } else {
      controls.start({
        x: 0,
      });
    }
  }, [action_name]);
  return (
    <Wrapper>
      <motion.div animate={controls} className={"kek"} />
    </Wrapper>
  );
};
