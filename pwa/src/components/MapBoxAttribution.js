import React from "react";
export const MapBoxAttribution = () => {
  return (
    <div
      className="column"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "min-content",
        position: "absolute",
        right: "-20px",
        top: "40%",
        height: "100px",
      }}
    >
      <div className="mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-compact">
        <button type="button" className="mapboxgl-ctrl-attrib-button">
          <span
            className="mapboxgl-ctrl-icon"
            aria-hidden="true"
            title="Toggle attribution"
          ></span>
        </button>
        <div className="mapboxgl-ctrl-attrib-inner">
          <a
            href="https://www.mapbox.com/about/maps/"
            target="_blank"
            title="Mapbox"
            aria-label="Mapbox"
          >
            © Mapbox
          </a>{" "}
          <a
            href="https://www.openstreetmap.org/about/"
            target="_blank"
            title="OpenStreetMap"
            aria-label="OpenStreetMap"
          >
            © OpenStreetMap
          </a>{" "}
          <a
            className="mapbox-improve-map"
            href="https://apps.mapbox.com/feedback/?owner=mapbox&amp;id=dark-v11&amp;access_token=pk.eyJ1IjoiYWxla3NsYXJpbyIsImEiOiJjbHU3bjk2MDIwNjI4MmlzMmMwZjBudWxlIn0.10Qwz-N6JActX3TrYaMLMw#/15.48/43.43/4.61"
            target="_blank"
            aria-label="Improve this map"
            rel="noopener nofollow"
          >
            Improve this map
          </a>
        </div>
      </div>
      <a
        className="mapboxgl-ctrl-logo"
        target="_blank"
        rel="noopener nofollow"
        href="https://www.mapbox.com/"
        aria-label="Mapbox logo"
      ></a>
    </div>
  );
};
