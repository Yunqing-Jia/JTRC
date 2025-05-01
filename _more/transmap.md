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

<script>
if (window !== window.top) {
  document.querySelectorAll('body *:not(#map):not(#map *)').forEach(e => e.style.display = 'none');
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  const map = document.getElementById('map');
  if (map) map.style.height = '100%';
}
</script>

### Visualization of Countries (Regions) and Cities Yunqing Jia Has Visited

<ul style="list-style-type: disc; padding-left: 20px;">
  <li>JMOT_2505 (JMOI_2505A) Project powered by Leaflet & OpenStreetMap</li>
  <li>Last modified on May 1st, 2025</span></li>
</ul>

<br>

<!-- Controls -->
<div style="margin: 10px;">
  <label for="yearSlider">Year:</label>
  <input type="range" id="yearSlider" min="1997" max="{{ site.time | date: '%Y' }}" step="1" value="1997">
  <span id="yearLabel">ALL</span>
</div>

{% include transportationmap.html %}

<div style="height: 25px;"></div>

<!-- Legend -->
<div id="legend" style="background: white; padding: 8px; border: 1px solid #ccc; position: absolute; bottom: 5px; left: 0px; z-index: 1000; font-size: 15px;">
  <b>Legend:</b><br>
  <i class="fa fa-home" style="color: rgb(97,170,227);"></i> Mudanjiang - Hometown<br>
  <span style="color: rgb(224,255,255);">●</span> First Visit<br>
  <span style="color: blue;">●</span> Multiple Visits<br>
</div>

