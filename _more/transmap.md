---
title: Transportation Map
permalink: /more/transmap/
---

<style>
.intro{
font-family:times;
font-size:21px;
}
</style>

Hello world from JMOT_2505 (JMOI_2505A) Project powered by Leaflet & OpenStreetMap!

<br>

This webpage is reserved for visualizing countries and cities Yunqing Jia has visited so far.

<br>

<!-- Map container -->
<div id="map" style="width: 100%; height: 80vh;"></div>

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  // Initialize the map centered at China
  const map = L.map('map').setView([35.8617, 104.1954], 4);

  // Use a light blue basemap (CartoDB Positron)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // List of visited cities with year
  const visitedCities = [
    { name: 'Beijing', coords: [39.9042, 116.4074], year: 2013 },
    { name: 'Shanghai', coords: [31.2304, 121.4737], year: 2010 },
    { name: 'Nanjing', coords: [23.1291, 113.2644], year: 2019 },
    { name: 'Chengdu', coords: [30.5728, 104.0668], year: 2018 },
    { name: 'Xi\'an', coords: [34.3416, 108.9398], year: 2017 },
    { name: 'Shenzhen', coords: [22.5431, 114.0579], year: 2014 }
  ];

  // Sort cities by year (optional: for time sequence)
  visitedCities.sort((a, b) => a.year - b.year);

  // Add markers with year info
  visitedCities.forEach((city, index) => {
    L.circleMarker(city.coords, {
      radius: 8,
      color: 'blue',
      fillColor: 'skyblue',
      fillOpacity: 0.7
    })
    .bindPopup(`<b>${city.name}</b><br>Visited in ${city.year}`)
    .addTo(map);
  });

  // Optionally connect cities with a polyline to show travel timeline
  const cityCoords = visitedCities.map(city => city.coords);
  const polyline = L.polyline(cityCoords, { color: 'blue', weight: 3, opacity: 0.7 }).addTo(map);

  // Fit map to bounds
  map.fitBounds(polyline.getBounds());

  // Show current location (if user allows geolocation)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      L.marker(userCoords)
        .bindPopup('You are here!')
        .addTo(map)
        .openPopup();
    });
  }
</script>
