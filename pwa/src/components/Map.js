import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import Fly from "../svg/Fly";
import styled from "@emotion/styled";
import { ActionButton } from "./ActionButton";
import { darkTheme } from "../global";
import {
  IconLocationFilled,
  IconAdjustments,
  IconPlus,
} from "@tabler/icons-react";
import { useHistory } from "react-router-dom";
import ColorLegend from "./ColorLegend";
import BottomDrawer from "./BottomDrawer";
const layers = [
  "precipitation_new",
  "clouds_new",
  "pressure_new",
  "wind_new",
  "temp_new",
];

const MapWrapper = styled.div`
  position: relative;
  height: 65vh;
  min-height: 65vh;
`;

export default function Map({ lat, lon, zoom = 0, setShowInput = () => {} }) {
  const current = useSelector((state) => state.location.current);
  const history = useHistory();
  const [selectedLayer, setSelectedLayer] = useState(0);
  const [maps, setMaps] = useState([]);
  const [count, setCount] = useState(10);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [source, addSource] = useState({
    clouds_new: 0,
    precipitation_new: 0,
    pressure_new: 0,
    wind_new: 0,
    temp_new: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lon, lat],
      zoom: zoom,
      // attributionControl: false,
    });
    // map.current.addControl(new mapboxgl.AttributionControl(), "top-left");
  }, []);
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      map.current.resize();
      setLoaded(true);
    });
  }, []);

  // `https://tile.openweathermap.org/map/${layers[selectedLayer]}/{z}/{x}/{y}.png?appid=${process.env.EXPO_PUBLIC_OPENWEATHERMAP_KEY}`

  useEffect(() => {
    let finished = false;
    if (!loaded || maps.length === 0 || finished) return;
    finished = true;
    maps.forEach((tile, index) => {
      map.current.addLayer({
        id: `rainviewer_${tile.path}`,
        type: "raster",
        source: {
          type: "raster",
          tiles: [
            `https://tilecache.rainviewer.com/v2/radar/${tile.path}/512/{z}/{x}/{y}/2/1_1.png`,
          ],
          tileSize: 256,
        },
        layout: { visibility: index === 0 ? "visible" : "none" },
        minzoom: 0,
        maxzoom: 22,
      });
    });
  }, [loaded, maps.length]);

  useEffect(() => {
    if (!loaded || maps.length === 0 || !play) return;
    let handle = null;
    let i2 = null;
    maps.forEach((frame, index) => {
      map.current.setLayoutProperty(
        `rainviewer_${frame.path}`,
        "visibility",
        index === time || index === time - 1 ? "visible" : "none"
      );
    });
    if (time - 1 >= 0) {
      const frame = maps[time - 1];
      let opacity = 1;
      handle = setTimeout(() => {
        i2 = setInterval(() => {
          if (opacity <= 0) {
            return clearInterval(i2);
          }
          map.current.setPaintProperty(
            `rainviewer_${frame.path}`,
            "raster-opacity",
            opacity
          );
          opacity -= 0.1;
        }, 50);
      }, 400);
    }
    return () => {
      if (handle) clearTimeout(handle);
      if (i2) clearInterval(i2);
    };
  }, [play, maps.length, loaded, time]);

  useEffect(() => {
    if (!loaded || maps.length === 0 || !play) return;
    const interval = setInterval(() => {
      setTime((count) => (count + 1) % maps.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [maps.length, play, loaded]);

  useEffect(() => {
    if (!loaded || maps.length === 0 || !play || time > 0) return;
    maps.forEach((frame, index) => {
      map.current.setLayoutProperty(
        `rainviewer_${frame.path}`,
        "visibility",
        index === 0 ? "visible" : "none"
      );
      map.current.setPaintProperty(
        `rainviewer_${frame.path}`,
        "raster-opacity",
        1
      );
    });
  }, [maps.length, play, loaded, time]);

  useEffect(() => {
    const getWeatherMaps = async () => {
      const response = await fetch(
        "https://api.rainviewer.com/public/weather-maps.json"
      );
      const data = await response.json();
      // Assuming you want the latest radar data

      setMaps(data.radar.past);
    };
    getWeatherMaps();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    map.current.flyTo({
      ...{
        center: [lon, lat],
        zoom: 4,
      }, // Fly to the selected target
      duration: 6000, // Animate over 12 seconds
      essential: true, // This animation is considered essential with
      //respect to prefers-reduced-motion
    });
  }, [loaded, lat, lon]);

  useEffect(() => {
    if (!loaded || maps.length === 0 || !play) return;
    const interval = setInterval(() => {
      setCount((count) => (count + 1) % maps.length);
    }, 500);
    return () => clearInterval(interval);
  }, [maps, play]);

  useEffect(() => {
    if (!loaded) return;

    let img = new Image(190, 190);
    img.onload = () => map.current.addImage("cat", img);
    img.src = "./images/target.svg";

    // Add a data source containing one point feature.
    map.current.addSource("point", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [lon, lat],
            },
          },
        ],
      },
    });

    // Add a layer to use the image to represent the data.
    map.current.addLayer({
      id: "points",
      type: "symbol",
      source: "point", // reference the data source
      layout: {
        "icon-image": "current", // reference the image
        "icon-size": 0.25,
      },
    });
  }, [loaded]);

  const goToStart = () => {
    const { lon, lat } = current;
    map.current.flyTo({
      center: [lon, lat],
      zoom: 4,
      duration: 4000, // Animate over 12 seconds
      essential: true, // This animation is considered essential with
    });
  };

  const handleDrag = (val) => {
    setTime(val);
    setPlay(false);

    maps.forEach((frame, index) => {
      map.current.setLayoutProperty(
        `rainviewer_${frame.path}`,
        "visibility",
        time === index ? "visible" : "none"
      );
      map.current.setPaintProperty(
        `rainviewer_${frame.path}`,
        "raster-opacity",
        1
      );
    });
  };

  // // hook to if scrolled
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <MapWrapper>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "100%" }}
      />
      <Slider
        time={time}
        overlays={maps}
        play={play}
        sliderCallback={handleDrag}
        onClick={() => {
          setPlay(!play);
        }}
      />
      <ActionButton onClick={goToStart}>
        <IconLocationFilled size={20} stroke={darkTheme.active} />
      </ActionButton>

      <ActionButton
        style={{
          top: "20px",
        }}
        onClick={() => {
          history.push("/settings");
        }}
        stroke={darkTheme.active}
      >
        <IconAdjustments />
      </ActionButton>

      <ActionButton
        style={{
          top: "20px",
          left: " 15px",
        }}
        onClick={() => {
          setShowInput(true);
        }}
        stroke={darkTheme.active}
      >
        <IconPlus />
      </ActionButton>
      <ColorLegend />
    </MapWrapper>
  );
}
