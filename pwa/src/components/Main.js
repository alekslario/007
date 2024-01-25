import React, { useEffect, useState } from "react";

import { useStore } from "../utils/store.js";

//https://stackoverflow.com/questions/5649803/remap-or-map-function-in-javascript
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}
export default () => {
  const [{ dates, date, current }, dispatch] = useStore();
  const temperature = date ? dates[date] : current;
  const [_, time] = (date || "").split("T");
  const [hours, minutes] = (time || "").split(":");
  const hours_int = parseInt(hours || "00");

  const degrees =
    hours_int < 4
      ? 110
      : hours_int < 13
      ? map_range(hours_int, 4, 12, 110, 320)
      : map_range(hours_int, 13, 24, 320, 110);

  const hue =
    hours_int < 4
      ? 180
      : hours_int < 13
      ? map_range(hours_int, 4, 12, 180, 360)
      : map_range(hours_int, 13, 24, 0, 180);

  const night = hours_int < 5 || hours_int > 21;
  const moon = night ? { x: 100, y: -250 } : { x: 300, y: -500 };
  const sun = !night ? { x: 100, y: -250 } : { x: 300, y: -500 };
  const clouds = [
    //10 random numbers between 0 and 100
    // generate array of 10 random numbers between -100 and 100
    ...Array.from({ length: 10 }, () => Math.floor(Math.random() * 400)),
  ];

  const dice = () => {
    //negative or positive
    return [
      //10 random numbers between 0 and 100
      // generate array of 10 random numbers between -100 and 100
      ...Array.from({ length: 10 }, () => Math.floor(Math.random() * 400)),
    ];
  };
  const [ps, setPs] = React.useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
      setPs(ps + 10);
    }, 100);
    return () => clearInterval(handle);
  }, [date]);

  // const [op, setOp] = useState({ bird1: 1, bird2: 0, bird3: 0 });
  // useEffect(() => {
  //   let count = 0;
  //   const handle = setInterval(() => {
  //     setOp({
  //       bird1: count % 2 === 0 ? 1 : 0,

  //       bird3: count % 2 !== 0 ? 1 : 0,
  //     });
  //     count++;
  //   }, 1000);
  //   return () => clearInterval(handle);
  // }, []);

  return (
    <div className="main">
      <h1 className="temperature-main">
        {`${temperature}`}
        <span style={{ "font-size": "22px" }}>°C</span>
      </h1>

      {/* <img
        src="public/images/back.png"
        alt=""
        className="cloud-back"
        style={{ filter: `hue-rotate(${ps}deg)` }}
      /> */}
      <img
        src="public/images/back.png"
        alt=""
        className="cloud-back"
        style={{ filter: `${night ? "hue-rotate(180deg)" : ""}` }}
      />
      <img
        src="public/images/sun.png"
        alt=""
        className="sun"
        style={{ transform: `translate(${sun.x}px, ${sun.y}px)` }}
      />

      <img
        src="public/images/moon.png"
        alt=""
        className="sun"
        style={{ transform: `translate(${moon.x}px, ${moon.y}px)` }}
      />
      <img
        src="public/images/cloud1.png"
        alt=""
        className="cloud"
        style={{ transform: `translateX(${dice()[0]}px)` }}
      />

      <img
        src="public/images/cloud1.png"
        alt=""
        className="cloud cloud5"
        style={{ transform: `translateX(${ps}px)` }}
      />
      <img
        src="public/images/cloud2.png"
        alt=""
        className="cloud cloud2"
        style={{ transform: `translateX(${dice()[0]}px)` }}
      />
      <img
        src="public/images/cloud3.png"
        alt=""
        className="cloud cloud3"
        style={{
          width: "40px",
          transform: `translateX(${dice()[0]}px)`,
        }}
      />
      <img
        src="public/images/cloud4.png"
        alt=""
        className="cloud cloud4"
        style={{
          width: "30px",
          transform: `translateX(${dice()[0]}px)`,
        }}
      />
      {/* <div className="bird-box">
        <img
          src="public/images/bird.png"
          alt=""
          className="bird"
          style={{ transform: `translateX(${dice()[0]}px)` }}
        />

      
      </div> */}
      {/* <div
        className="main-overlay"
        style={{ transform: `rotate(${degrees}deg)` }}
      ></div> */}
    </div>
  );
};
