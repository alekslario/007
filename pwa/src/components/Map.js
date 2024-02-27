import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import React, { useEffect, useRef, useState } from "react";

const layers = [
  "precipitation_new",
  "clouds_new",
  "pressure_new",
  "wind_new",
  "temp_new",
];

export default function Map({ lat, lon, zoom = 0 }) {
  const [selectedLayer, setSelectedLayer] = useState(0);
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
    });
  }, []);
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("load", () => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    map.current.addLayer({
      id: layers[selectedLayer],
      type: "raster",
      source: {
        type: "raster",
        tiles: [
          `https://tile.openweathermap.org/map/${layers[selectedLayer]}/{z}/{x}/{y}.png?appid=${process.env.EXPO_PUBLIC_OPENWEATHERMAP_KEY}`,
        ],
        tileSize: 256,
      },
      minzoom: 0,
      maxzoom: 22,
    });
    return () => {
      map.current.removeLayer(layers[selectedLayer]);
      map.current.removeSource(layers[selectedLayer]);
    };
  }, [loaded, selectedLayer]);

  useEffect(() => {
    map.current.flyTo({
      ...{
        center: [lon, lat],
        zoom: 4,
      }, // Fly to the selected target
      duration: 6000, // Animate over 12 seconds
      essential: true, // This animation is considered essential with
      //respect to prefers-reduced-motion
    });
  }, [loaded]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "400px" }}
      />
      <button
        style={{ width: "100%", height: "50px" }}
        onClick={() => {
          setSelectedLayer((prev) => {
            if (prev === 4) {
              return 0;
            }
            return prev + 1;
          });
        }}
      >
        Click
      </button>
    </div>
  );
}
