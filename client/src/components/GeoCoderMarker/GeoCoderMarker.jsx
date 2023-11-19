import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconshadow from 'leaflet/dist/images/marker-shadow.png';
import { geocodeService } from 'esri-leaflet-geocoder'; // Import the geocodeService

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]);

  useEffect(() => {
    // Function to handle the geocoding and set the marker position
    const geocodeAddress = () => {
      geocodeService()
        .geocode()
        .text(address)
        .run((error, results) => {
          if (!error && results.results.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            setPosition([lat, lng]);
            map.setView([lat, lng], 15); // Update the map view to the geocoded location
          } else {
            console.log('Geocoding error:', error);
          }
        });
    };

    geocodeAddress(); // Call the geocoding function when the component mounts or address changes
  }, [address, map]);

  // Create the custom icon
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconshadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup>{address}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
