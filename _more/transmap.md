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

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

<!-- Map container -->
<div id="map" style="width: 100%; height: 80vh;"></div>

<!-- Controls -->
<div style="margin: 10px;">
  <label for="yearSlider">Year:</label>
  <input type="range" id="yearSlider" min="1997" max="{{ site.time | date: '%Y' }}" step="1" value="1997">
  <span id="yearLabel">ALL</span>
</div>

<!-- Legend -->
<div id="legend" style="background: white; padding: 8px; border: 1px solid #ccc; position: absolute; bottom: 5px; left: 0px; z-index: 1000; font-size: 15px;">
  <b>Legend:</b><br>
  <i class="fa fa-home" style="color: rgb(97,170,227);"></i> Mudanjiang<br>
  <span style="color: rgb(224,255,255);">●</span> First Visit<br>
  <span style="color: blue;">●</span> Multiple Visits
</div>

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  // Initialize map
  const map = L.map('map').setView([20, 0], 2);

  // Basemap
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const mudanjiang = { name: 'Mudanjiang', coords: [44.586111, 129.599444] };

  const visitedCities = [
    { name: 'Mudanjiang', coords: [44.586111, 129.599444], years: Array.from({length: {{ site.time | date: '%Y' }} - 1999 + 1}, (_,i)=>1999+i) },
    { name: 'Beijing', coords: [39.9042, 116.4074], years: [2013, 2017, 2020] },
    { name: 'Shanghai', coords: [31.2304, 121.4737], years: [2010] },
    { name: 'Nanjing', coords: [32.0603, 118.7969], years: [2019, 2021] },
    { name: 'Chengdu', coords: [30.5728, 104.0668], years: [2018] },
    { name: 'Xi\'an', coords: [34.3416, 108.9398], years: [2017, 2022] },
    { name: 'Shenzhen', coords: [22.5431, 114.0579], years: [2014, 2015, 2019] },
  ];

  const markers = [];
  const lines = [];

  visitedCities.forEach(city => {
    const isMudanjiang = city.name === mudanjiang.name;
    const isMultiple = city.years.length > 1;

    let marker;
    if (isMudanjiang) {
      marker = L.marker(city.coords, {
        icon: L.divIcon({
          html: '<i class="fa fa-home fa-2x" style="color: rgb(97,170,227);"></i>',
          className: '',
          iconSize: [24, 24],
          iconAnchor: [12, 24]
        })
      });
    } else {
      const markerColor = isMultiple ? 'blue' : 'rgb(224,255,255)';
      marker = L.circleMarker(city.coords, {
        radius: 8,
        color: markerColor,
        fillColor: markerColor,
        fillOpacity: 0.8
      });
    }

    marker
      .bindTooltip(city.name, { direction: 'top' })
      .bindPopup(`<b>${city.name}</b><br>Visited: ${city.years.join(', ')}`)
      .addTo(map);

    markers.push({ marker, city });

    if (!isMudanjiang) {
      const line = L.polyline([mudanjiang.coords, city.coords], {
        color: 'rgb(135,206,235)',
        weight: 1.2,
        opacity: 0.5
      }).addTo(map);
      lines.push({ line, city });
    }
  });

  map.fitBounds(visitedCities.map(c => c.coords));

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

  updateMapByYear('ALL');
</script>
