import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import React, { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { ActionButton } from "./ActionButton";
import { darkTheme, lightTheme } from "../global";
import { selectSlide } from "../utils/store";
import {
  IconLocationFilled,
  IconAdjustments,
  IconPlus,
} from "@tabler/icons-react";
import { useHistory } from "react-router-dom";
import ColorLegend from "./ColorLegend";
import { MapBoxAttribution } from "./MapBoxAttribution";

const MapWrapper = styled.div`
  position: relative;
  height: 65vh;
  min-height: 65vh;
  .gradient-overlay {
    height: 80px;
    width: 100%;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.backgroundColor},
      transparent
    );
    position: absolute;
    bottom: 0px;
  }
`;

export default function Map({
  lat,
  lon,
  zoom = 0,
  setShowInput = () => {},
  setLoadingScreen = () => {},
  selectedIndex,
}) {
  const [current, preferences] = useSelector((state) => [
    state.location.current,
    state.preferences,
  ]);
  const dispatch = useDispatch();
  const [currentLayers, setCurrentLayers] = useState("Mapbox Dark");
  const [currentTheme, setCurrentTheme] = useState("Mapbox Dark");
  const theme = preferences.theme.selected === "dark" ? darkTheme : lightTheme;
  const history = useHistory();
  const [maps, setMaps] = useState([]);

  const [play, setPlay] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const [{ time, reverse, cycles }, setTime] = useState({
    time: 0,
    reverse: false,
    cycles: 0,
  });

  const [loaded, setLoaded] = useState(false);
  const mapContainer = useRef(null);
  const map = useRef(null);

  // // start animation
  useEffect(() => {
    if (!map.current || !loaded) return;
    setTimeout(() => {
      setPlay(true);
      setBlocked(false);
    }, 5000);
  }, [loaded]);

  //notify parent when the map is loaded
  useEffect(() => {
    setLoadingScreen(loaded);
  }, [loaded]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [lon, lat],
      zoom: zoom,
      // attributionControl: false,
    });
    //load styles

    map.current.on("styledata", async () => {
      const style = map.current.getStyle();
      setCurrentTheme(style.name);
    });
    // map.current.addControl(new mapboxgl.AttributionControl(), "top-left");
  }, []);

  useEffect(() => {
    if (!map.current || !loaded) return;
    map.current.setStyle(
      preferences.theme.selected === "dark"
        ? "mapbox://styles/mapbox/dark-v11"
        : "mapbox://styles/mapbox/light-v11"
    );
  }, [preferences.theme.selected]);

  const setPointer = () => {
    if (!map.current.hasImage("target")) {
      let img = new Image(190, 190);
      img.onload = () => {
        map.current.addImage("target", img);
      };
      img.src = "./images/target.svg";
    }
    if (!map.current.getSource("points")) {
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
    }

    // Add a layer to use the image to represent the data.
    if (!map.current.getLayer("points")) {
      map.current.addLayer({
        id: "points",
        type: "symbol",
        source: "point", // reference the data source
        layout: {
          "icon-image": "target", // reference the image
          "icon-size": 0.25,
        },
      });
    }
  };

  const setOverlay = () => {
    maps.forEach((tile, index) => {
      if (map.current.getLayer(`rainviewer_${tile.path}`)) return;
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
  };

  useEffect(() => {
    if (currentTheme !== currentLayers) {
      //reload mapbox layers on theme change
      setPointer();
      setOverlay();
      setCurrentLayers(currentTheme);
    }
  }, [currentTheme, currentLayers]);

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
    setOverlay();
  }, [loaded, maps.length]);

  //animate overlays
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
          //speed up the animation in reverse
        }, 80);
      }, 500);
    }
    return () => {
      if (handle) clearTimeout(handle);
      if (i2) clearInterval(i2);
    };
  }, [play, maps.length, loaded, time]);

  //timer - forward timer
  useEffect(() => {
    if (!loaded || maps.length === 0 || !play || reverse) return;
    const interval = setInterval(() => {
      setTime((p) => {
        const { time, reverse, cycles } = p;
        return time === maps.length
          ? { time: time - 1, reverse: true, cycles: cycles + 1 }
          : { time: time + 1, reverse, cycles };
      });
      // launch reverse timer
    }, 700);
    return () => clearInterval(interval);
  }, [maps.length, play, loaded, reverse]);

  //sped up reverse timer
  useEffect(() => {
    if (!loaded || maps.length === 0 || !play || !reverse) return;
    const interval = setInterval(() => {
      setTime(({ time, reverse, ...rest }) => {
        return time === 0
          ? { time: time + 1, reverse: false, ...rest }
          : { time: time - 1, reverse, ...rest };
      });
      // launch reverse timer
    }, 50);
    return () => clearInterval(interval);
  }, [maps.length, play, loaded, reverse]);

  //pause animation every 5 cycles

  useEffect(() => {
    if (
      !loaded ||
      maps.length === 0 ||
      !play ||
      cycles === 0 ||
      cycles % 5 !== 0
    )
      return;
    setTime((prev) => ({ ...prev, time: 0, reverse: false }));
    setPlay(false);
  }, [cycles]);

  //
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

  // get weather maps || todo cache the maps
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

  // detecting flying events triggered by map.current.flyTo
  useEffect(() => {
    if (!loaded) return;
    map.current.on("moveend", ({ originalEvent }) => {
      //detect if the event was triggered by the user
      if (!originalEvent) {
        map.current.fire("flyend");
      }
    });

    map.current.on("movestart", ({ originalEvent }) => {
      if (!originalEvent) {
        map.current.fire("flystart");
      }
    });
    map.current.on("flyend", () => {
      setPlay(true);
      setBlocked(false);
    });

    map.current.on("flystart", () => {
      setPlay(false);
      setBlocked(true);
    });
  }, [loaded]);

  const flyTo = (lat, lon, loaded) => {
    if (!loaded) return;
    setPlay(false);
    setBlocked(true);
    map.current.flyTo({
      ...{
        center: [lon, lat],
        zoom: 4,
      }, // Fly to the selected target
      duration: 6000, // Animate over 12 seconds
      essential: true, // This animation is considered essential with
      //respect to prefers-reduced-motion
    });
  };
  // flying to new location on swipe or loading of the map
  useEffect(() => {
    flyTo(lat, lon, loaded);
  }, [loaded, lat, lon]);

  //enable play button early if the fly animation takes too long
  // it's hack. in case the flyend event is not triggered (happens occasionally, the cause is unknown)
  useEffect(() => {
    if (blocked) return;
    const handle = setTimeout(() => {
      setBlocked(false);
    }, 10000);

    return () => clearTimeout(handle);
  }, [blocked]);

  // set pointer on the map
  useEffect(() => {
    if (!loaded) return;
    setPointer();
  }, [loaded]);

  const goToStart = () => {
    if (selectedIndex === 0) {
      flyTo(lat, lon, loaded);
    } else {
      dispatch(selectSlide(0));
    }
  };

  // reset animation on drag
  const handleDrag = (val) => {
    setPlay(false);
    setTime((prev) => ({ ...prev, time: val, reverse: false }));

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

  return (
    <MapWrapper theme={theme}>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "100%" }}
      />
      <MapBoxAttribution />
      <Slider
        time={time}
        overlays={maps}
        play={play}
        sliderCallback={handleDrag}
        onClick={() => {
          setPlay(!play);
        }}
        disabled={blocked}
      />
      <ActionButton onClick={goToStart} theme={theme} disabled={blocked}>
        <IconLocationFilled size={20} stroke={theme.active} />
      </ActionButton>

      <ActionButton
        style={{
          top: "20px",
        }}
        onClick={() => {
          history.push("/settings");
        }}
        stroke={theme.active}
        theme={theme}
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
        stroke={theme.active}
        theme={theme}
      >
        <IconPlus />
      </ActionButton>
      <ColorLegend />
      <div className="gradient-overlay"></div>
    </MapWrapper>
  );
}
