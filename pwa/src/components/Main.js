import React, { useEffect, useState } from "react";

import Map from "./Map";

export default () => {
  const [{ lat, lon }, setCoords] = useState({ lat: 0, lon: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  return <>{lat && lon && <Map lat={lat} lon={lon} />}</>;
};
