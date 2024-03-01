import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Map from "./Map";

export default () => {
  const { lon, lat } = useSelector((state) => state.data);
  return <>{lat && lon && <Map lat={lat} lon={lon} />}</>;
};
