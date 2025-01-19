import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmF0bmFwcml5YTIwMDIiLCJhIjoiY202MmVtcjE2MGF3YTJqcjQzOXRpZ251diJ9.7oySUy957bXjSsSTEPhE_g";

// Function to get user's location and city using Mapbox API
export async function getLocation() {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch city details using Mapbox Geocoding API
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
      );

      const data = await res.json();
      const city = data.features.map((feature) => feature.text).join(", ");

      return { longitude, latitude, city: city || "Unknown Location" };
    } else {
      throw new Error("Geolocation is not supported in your browser");
    }
  } catch (error) {
    console.error("Error getting location: " + error.message);
  }
}
