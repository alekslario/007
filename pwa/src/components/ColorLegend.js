import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconCaretRight, IconCaretLeft } from "@tabler/icons-react";
import styled from "@emotion/styled";
import { darkTheme, lightTheme } from "../global";
import { Row, Col } from "./Flex";
import { useSelector } from "react-redux";
const colors = [
  "#ff1d02",
  "#ffeb0aff",
  "#105E7F",
  "#0076A9",
  "#6ACEE6",
  "#47c278ff",
];
//f
const ActionIconCustom = styled(ActionIcon)`
  position: relative;
  left: -3px;
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
`;

const ColorMeterWrapper = styled.div`
  border-radius: 15px;
  border: 1px transparent solid;
  overflow: hidden;
  width: 10px;
  border-radius: 15px;
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const ColorLegendWrapper = styled.div`
  background-color: ${({ theme }) => theme.card};
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  width: min-content;
  position: absolute;
  bottom: 100px;
  left: 15px;
  transition: width 0.5s ease-in-out;
  overflow: hidden;
  height: fit-content;
  padding-top: 4px;
  width: 20px;
`;

const Bb = styled.b`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 100px;
  left: 15px;
  background: red;
`;

const linearGradient = (index) => {
  return `linear-gradient(360deg, ${colors[index + 1]} 0%, ${
    colors[index]
  } 100%)`;
};
const ColorMeter = () => {
  return (
    <ColorMeterWrapper>
      {colors.slice(0, -1).map((_, i) => (
        <div
          key={i}
          style={{
            background: linearGradient(i),

            width: "10px",
          }}
        ></div>
      ))}
    </ColorMeterWrapper>
  );
};

const Text = styled.div`
  color: ${({ theme }) => theme.mainText};
`;
const SubText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;

const texts = [
  ["Extreme rain", ">30.0 mm/h"],
  ["Intense rain", "30.0 mm/h"],
  ["Heavy rain", "15.0 mm/h"],
  ["Moderate rain", "7.6 mm/h"],
  ["Light rain", "2.5 mm/h"],
  ["Drizzle", "0.1 mm/h"],
];

const ColorLegendText = ({ theme }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "4px 20px 4px 20px",
        textWrap: "nowrap",
        flexWrap: "nowrap",
      }}
    >
      {colors.map((color, i) => {
        return (
          <Row style={{ alignItems: "center" }} key={i}>
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: color,
                marginRight: "10px",
              }}
            ></div>
            <Col>
              <Text theme={theme}>{texts[i][0]}</Text>
              <SubText theme={theme}>{texts[i][1]}</SubText>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};
export const ColorLegend = () => {
  const [preferences] = useSelector((state) => [state.preferences]);
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const [show, setShow] = useState(false);
  return (
    <ColorLegendWrapper
      // style={{ width: show ? "200px" : "20px" }}
      theme={theme}
      onClick={() => {
        setShow((prev) => !prev);
      }}
      style={{
        ...(show ? { width: "200px" } : { width: "20px" }),
      }}
    >
      <Col>
        <Row>
          <ColorMeter />
          <ColorLegendText theme={theme} />
        </Row>
        <ActionIconCustom theme={theme}>
          {show ? (
            <IconCaretLeft fill={theme.active} stroke={theme.active} />
          ) : (
            <IconCaretRight fill={theme.active} stroke={theme.active} />
          )}
        </ActionIconCustom>
      </Col>
    </ColorLegendWrapper>
  );
};
export default ColorLegend;
