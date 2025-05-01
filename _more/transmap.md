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

<!-- Controls -->
<div style="margin: 10px;">
  <label for="yearSlider">Year:</label>
  <input type="range" id="yearSlider" min="1997" max="{{ site.time | date: '%Y' }}" step="1" value="1997">
  <span id="yearLabel">ALL</span>
</div>

<!-- Legend -->
<div id="legend" style="background: white; padding: 8px; border: 1px solid #ccc; position: absolute; bottom: 5px; right: 50px; z-index: 1000; font-size: 15px;">
  <b>Legend:</b><br>
  <span style="color: rgb(97,170,227);">●</span> Mudanjiang - Hometown<br>
  <span style="color: rgb(25,25,112);">●</span> First Visit<br>
  <span style="color: rgb(224,255,255);">●</span> Multiple Visits
</div>

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  // Initialize map centered globally
  const map = L.map('map').setView([20, 0], 2);

  // Light blue basemap
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Reference city (Mudanjiang)
  const mudanjiang = { name: 'Mudanjiang', coords: [44.586111, 129.599444] };

  // Visited cities data
  const visitedCities = [
    { name: 'Beijing', coords: [39.9042, 116.4074], years: [2013, 2017, 2020] },
    { name: 'Shanghai', coords: [31.2304, 121.4737], years: [2010] },
    { name: 'Nanjing', coords: [32.0603, 118.7969], years: [2019, 2021] },
    { name: 'Chengdu', coords: [30.5728, 104.0668], years: [2018] },
    { name: 'Xi\'an', coords: [34.3416, 108.9398], years: [2017, 2022] },
    { name: 'Shenzhen', coords: [22.5431, 114.0579], years: [2014, 2015, 2019] },
    { name: 'Mudanjiang', coords: [44.586111, 129.599444], years: Array.from({length:{{ site.time | date: '%Y' }}-1999+1}, (_,i)=>1999+i) } // Every year
  ];

  // Store markers & lines for later control
  const markers = [];
  const lines = [];

  // Create markers and lines
  visitedCities.forEach(city => {
    const firstVisitYear = Math.min(...city.years);
    const isMultiple = city.years.length > 1;

    // determine marker color
    let markerColor;
    if (city.name === mudanjiang.name) {
      markerColor = 'rgb(97,170,227)'; // Mudanjiang
    } else if (isMultiple) {
      markerColor = 'blue'; // revisit
    } else {
      markerColor = 'rgb(224,255,255)'; // first visit
    }

    const marker = L.circleMarker(city.coords, {
      radius: 8,
      color: markerColor,
      fillColor: markerColor,
      fillOpacity: 0.8
    })
    .bindPopup(`<b>${city.name}</b><br>Visited: ${city.years.join(', ')}`)
    .addTo(map);

    markers.push({ marker, city });

    // skip drawing line to self
    if (city.name !== mudanjiang.name) {
      const line = L.polyline([mudanjiang.coords, city.coords], {
        color: 'rgb(135,206,235)',
        weight: 1.5,
        opacity: 0.5
      }).addTo(map);
      lines.push({ line, city });
    }
  });

  // Fit map to show all markers
  const allCoords = visitedCities.map(c => c.coords);
  map.fitBounds(allCoords);

  // Year slider event
  const slider = document.getElementById('yearSlider');
  const label = document.getElementById('yearLabel');

  slider.addEventListener('input', function() {
    const year = parseInt(this.value);
    if (year === 1997) {
      label.textContent = 'ALL';
      updateMapByYear('ALL');
    } else {
      label.textContent = year;
      updateMapByYear(year);
    }
  });

  function updateMapByYear(selectedYear) {
    markers.forEach(({ marker, city }) => {
      const show = (selectedYear === 'ALL') || city.years.includes(selectedYear);
      if (show) {
        marker.addTo(map);
      } else {
        map.removeLayer(marker);
      }
    });

    lines.forEach(({ line, city }) => {
      const show = (selectedYear === 'ALL') || city.years.includes(selectedYear);
      if (show) {
        line.addTo(map);
      } else {
        map.removeLayer(line);
      }
    });
  }

  // Default: show all
  updateMapByYear('ALL');
</script>
