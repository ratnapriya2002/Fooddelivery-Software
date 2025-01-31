import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmF0bmFwcml5YTIwMDIiLCJhIjoiY202MmoyNHp6MDkzdjJscjRxaTVocGdhYyJ9.1K5MK4_WiFKLqVDSQB8Gwg";

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Suggestions for the search

  useEffect(() => {
    // Initialize the map
    const mapInstance = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    mapRef.current = mapInstance;
    setMap(mapInstance);

    // Cleanup the map on component unmount
    return () => mapInstance.remove();
  }, []);

  // Function to handle input change and get suggestions from Mapbox Geocoding API
  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearch(query);

    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      // Fetch location suggestions from the Mapbox Geocoding API
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();

      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Function to handle selection of a suggestion and fly to that location
  const handleSuggestionSelect = (suggestion) => {
    const [longitude, latitude] = suggestion.center;

    // Fly to the selected location
    map.flyTo({
      center: [longitude, latitude],
      zoom: 12,
      essential: true,
    });

    // Add or update the marker at the selected location
    if (markerRef.current) {
      markerRef.current.setLngLat([longitude, latitude]);
    } else {
      markerRef.current = new mapboxgl.Marker({ color: "red" })
        .setLngLat([longitude, latitude])
        .addTo(map);
    }

    // Clear suggestions after selection
    setSuggestions([]);
    setSearch(suggestion.place_name); // Set the search input to the selected location
  };

  return (
    <div className="relative w-[95%] max-w-[600px]">
      {/* Search Box */}
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for a location"
        className="w-[90%] p-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionSelect(suggestion)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}

      {/* Map Container */}
      <div
        id="map"
        style={{
          height: "400px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default MapComponent;
