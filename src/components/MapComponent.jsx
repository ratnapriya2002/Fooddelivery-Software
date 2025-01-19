import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent = () => {
  // Set your Mapbox access token
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmF0bmFwcml5YTIwMDIiLCJhIjoiY202MmoyNHp6MDkzdjJscjRxaTVocGdhYyJ9.1K5MK4_WiFKLqVDSQB8Gwg";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    // Cleanup the map on component unmount
    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      className="w-[95%] max-w-[600px]"
      style={{
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    />
  );
};

export default MapComponent;
