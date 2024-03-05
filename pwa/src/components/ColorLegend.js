import React, { useState } from "react";
import ActionButton from "./ActionButton";
import { ActionIcon } from "@mantine/core";
import { IconCaretRight, IconCaretLeft } from "@tabler/icons-react";
import styled from "@emotion/styled";
import { darkTheme } from "../global";
import { Row, Col } from "./Flex";
const colors = {
  0: "#dfdfdfff",
  15: "#9bea8fff",
  20: "#58ff42ff",
  25: "#47c278ff",
  30: "#4793f9ff",
  35: "#0c59ffff",
  40: "#6153c1ff",
  45: "#ff93a3ff",
  50: "#ff3f35ff",
  55: "#c20511ff",
  60: "#ffeb0aff",
};

const ColorMeterWrapper = styled.div`
  border-radius: 15px;
  border: 1px transparent solid;
  overflow: hidden;
  width: 20px;
  border-radius: 15px;
  margin: 10px;
`;

const ColorLegendWrapper = styled.div`
  background-color: ${darkTheme.card};
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
  padding-top: 5px;
`;
const ColorMeter = () => {
  return (
    <ColorMeterWrapper>
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className={`tint${9 - i} tint`}
          style={{
            width: "20px",
            height: "20px",
          }}
        ></div>
      ))}
    </ColorMeterWrapper>
  );
};

const Text = styled.div`
  color: ${darkTheme.mainText};
`;
const SubText = styled.div`
  font-size: 12px;
  color: ${darkTheme.seconDaryText};
`;

const texts = [
  ["Light rain", "0.1 mm/h"],
  ["Light rain", "2.5 mm/h"],
  ["Moderate rain", "7.6 mm/h"],
  ["Heavy rain", "15.0 mm/h"],
  ["Intense rain", "30.0 mm/h"],
  ["Extreme rain", ">30.0 mm/h"],
];

const ColorLegendText = () => {
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
      {["#58ff42", "#ff5f5e", "#4f54cf", "#4798ec", "#58fd44", "#c9e2c5"].map(
        (color, i) => {
          return (
            <Row style={{ alignItems: "center" }}>
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
                <Text>{texts[i][0]}</Text>
                <SubText>{texts[i][1]}</SubText>
              </Col>
            </Row>
          );
        }
      )}
    </div>
  );
};
export const ColorLegend = () => {
  const [show, setShow] = useState(false);
  return (
    <ColorLegendWrapper style={{ width: show ? "200px" : "40px" }}>
      <Col>
        <Row>
          <ColorMeter />
          <ColorLegendText />
        </Row>
        <ActionIcon
          style={{
            margin: "6px",
          }}
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? (
            <IconCaretLeft fill={darkTheme.active} stroke={darkTheme.active} />
          ) : (
            <IconCaretRight fill={darkTheme.active} stroke={darkTheme.active} />
          )}
        </ActionIcon>
      </Col>
    </ColorLegendWrapper>
  );
};
export default ColorLegend;
