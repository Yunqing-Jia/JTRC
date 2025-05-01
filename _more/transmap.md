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
  <li>Last modified on May 1st, 2025</li>
</ul>

<br>

<div style="height: 50px;"></div>

<div style="margin: 10px; position: relative;">
  <label for="yearSlider">Year:</label>
  <input type="range" id="yearSlider" min="1997" max="{{ site.time | date: '%Y' }}" step="1" value="1997">
  <span id="yearLabel">ALL</span>

  <div id="legend" style="background: white; padding: 1px; border: 1px solid #ccc; position: absolute; top: -100px; right: 0px; z-index: 1000; font-size: 15px;">
  <b>Legend:</b>
  <table style="border-collapse: collapse; margin-bottom: -2px; padding-bottom: -2px;">
    <tr style="border: none;">
      <td style="border: none; padding-top: 3px; padding-right: 5px; text-align: center;">
        <i class="fa fa-home" style="color: rgb(97,170,227);"></i>
      </td>
      <td style="border: none; padding-top: 3px;">Mudanjiang - Hometown</td>
    </tr>
    <tr style="border: none;">
      <td style="border: none; padding-top: 1px; padding-right: 5px; text-align: center;">
        <span style="color: rgb(224,255,255);">●</span>
      </td>
      <td style="border: none; padding-top: 1px;">First Visit</td>
    </tr>
    <tr style="border: none;">
      <td style="border: none; padding-top: 1px; padding-right: 5px; text-align: center;">
        <span style="color: blue;">●</span>
      </td>
      <td style="border: none; padding-top: 1px;">Multiple Visits</td>
    </tr>
  </table>
  </div>

</div>

{% include transportationmap.html %}




