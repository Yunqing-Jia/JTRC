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

## Visualization of Countries (Regions) and Cities Yunqing Jia has Visited So Far

<br>

<ul style="list-style-type: disc; padding-left: 20px;">
  <li>JMOT_2505 (JMOI_2505A) Project powered by Leaflet & OpenStreetMap</li>
  <li>Last modified on <span id="lastModified"></span></li>
</ul>

<script>
  const today = new Date();
  const formatted = today.toLocaleDateString('en-CA'); // YYYY-MM-DD
  document.getElementById('lastModified').textContent = formatted;
</script>

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

<br>

<!-- Legend -->
<div id="legend" style="background: white; padding: 8px; border: 1px solid #ccc; position: absolute; bottom: 5px; left: 0px; z-index: 1000; font-size: 15px;">
  <b>Legend:</b><br>
  <i class="fa fa-home" style="color: rgb(97,170,227);"></i> Mudanjiang<br>
  <span style="color: rgb(224,255,255);">●</span> First Visit<br>
  <span style="color: blue;">●</span> Multiple Visits<br>
</div>

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const mudanjiang = { name: 'Mudanjiang', coords: [44.586111, 129.599444] };

  const visitedCities = [
    { name: 'Mudanjiang', coords: [44.586111, 129.599444], years: Array.from({length: {{ site.time | date: '%Y' }} - 1999 + 1}, (_,i)=>1999+i) },
    { name: 'Beijing', coords: [39.9042, 116.4074], years: [2013, 2018, 2019, 2021, 2023, 2024, 2025] },
    { name: 'Harbin', coords: [45.8038, 126.5350], years: [2009, 2010, 2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024] },
    { name: 'Qinhuangdao', coords: [39.9354, 119.5996], years: [2009, 2021, 2025] },   
    { name: 'Shanghai', coords: [31.2304, 121.4737], years: [2010, 2017, 2023, 2025] },
    { name: 'Nanjing', coords: [32.0603, 118.7969], years: [2019, 2021, 2022, 2023, 2024] },
    { name: 'Chengdu', coords: [30.5728, 104.0668], years: [2018, 2019, 2024] },
    { name: 'Xi\'an', coords: [34.3416, 108.9398], years: [2017, 2018, 2019, 2020, 2021, 2024] },
    { name: 'Shenzhen', coords: [22.5431, 114.0579], years: [2014] },
    { name: 'Changsha', coords: [28.2282, 112.9388], years: [2024] },
    { name: 'Wuhan', coords: [30.5928, 114.3055], years: [2023] },
    { name: 'Tai\ 'an', coords: [36.200252, 117.087614], years: [2017] },
    { name: 'Tengzhou', coords: [35.114156, 117.165824], years: [2017] },
    { name: 'Jiangmen', coords: [22.578738, 113.081901], years: [2014] },
    { name: 'Shenyang', coords: [41.8057, 123.4315], years: [2018, 2025] },
    { name: 'Dalian', coords: [38.9140, 121.6147], years: [2011] },
    { name: 'Hong Kong', coords: [22.3193, 114.1694], years: [2014] },
    { name: 'Xing\'an League', coords: [46.0838, 122.0670], years: [2014] },
    { name: 'Zhenjiang', coords: [32.1896, 119.4250], years: [2023] },
    { name: 'Suzhou', coords: [31.2989, 120.5853], years: [2024] },
    { name: 'Hangzhou', coords: [30.2741, 120.1551], years: [2024] },
    { name: 'Changde', coords: [29.0397, 111.6839], years: [2024] },
    { name: 'Rizhao', coords: [35.4164, 119.5272], years: [2025] },
    { name: 'Qingdao', coords: [36.0671, 120.3826], years: [2024, 2025] },
    { name: 'Kangding', coords: [30.0553, 101.9641], years: [2024] },
    { name: 'Chuzhou', coords: [32.3210, 118.2972], years: [2023] },
    { name: 'Lueyang', coords: [33.327281, 106.156718], years: [2018] },
    { name: 'Washington D.C.', coords: [38.8951, -77.0364], years: [2024] },
    { name: 'Vienna', coords: [48.2082, 16.3738], years: [2024] },
    { name: 'Graz', coords: [47.0707, 15.4395], years: [2025] },
  ];

  const markers = [];
  const lines = [];

  // Create all markers once
  visitedCities.forEach(city => {
    let marker;
    if (city.name === mudanjiang.name) {
      marker = L.marker(city.coords, {
        icon: L.divIcon({
          html: '<i class="fa fa-home fa-2x" style="color: rgb(97,170,227);"></i>',
          className: '',
          iconSize: [24, 24],
          iconAnchor: [12, 24]
        })
      });
    } else {
      marker = L.circleMarker(city.coords, {
        radius: 5,
        color: 'rgb(224,255,255)',
        fillColor: 'rgb(224,255,255)',
        fillOpacity: 0.8
      });
    }

    marker
      .bindTooltip(city.name, { direction: 'top' })
      .bindPopup(`<b>${city.name}</b><br>Visited: ${city.years.join(', ')}`)
      .addTo(map);

    markers.push({ marker, city });

    if (city.name !== mudanjiang.name) {
      const line = L.polyline([mudanjiang.coords, city.coords], {
        color: 'rgb(135,206,235)',
        weight: 1.0,
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
      const visitCount = (selectedYear === 'ALL')
        ? city.years.length
        : city.years.filter(y => y <= selectedYear).length;

      if (visitCount > 0) {
        marker.addTo(map);
        if (marker instanceof L.CircleMarker) {
          const color = visitCount >=2 ? 'blue' : 'rgb(224,255,255)';
          marker.setStyle({
            color: color,
            fillColor: color,
            fillOpacity: 0.8
          });
        }
      } else {
        map.removeLayer(marker);
      }
    });

    lines.forEach(({ line, city }) => {
      const visitCount = (selectedYear === 'ALL')
        ? city.years.length
        : city.years.filter(y => y <= selectedYear).length;
      
      if (visitCount > 0) {
        line.addTo(map);
      } else {
        map.removeLayer(line);
      }
    });
  }

  updateMapByYear('ALL');
</script>
