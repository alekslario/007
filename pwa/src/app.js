import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout.js";
import "./style.css";
import "./global.js";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Layout />);
