---
title: Conference Presentation
permalink: /jmtr/conference/
---

<style>
.intro{
font-family:times;
font-size:21px;
}
</style>

<div class="intro">
[1] Chen, X. (*), <b>Jia, Y.</b> (2024). Traffic signal optimization for mitigating pollutant emissions of grid intersections with contraflow
left-turn lanes. <i>103rd Annual Meeting of the Transportation
Research Board (TRB 2024 Annual Meeting)</i>, January 7-11, 2024, Washington, D.C., United States.
</div>
<br>

<div class="intro">
[2] <b>Jia, Y.</b>, An, C. (*), Lu, Z., & Xia, J. (2023). Joint optimization of time-of-day intervals and robust signal timing for isolated intersection. <i>23rd COTA International Conference of Transportation Professionals (CICTP2023)</i>, July 14-17, 2023, Beijing, China
</div>

<div class="btn-toolbar" role="toolbar">
<div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-pressed="true">Paper</a>
  <a href="#" class="btn btn-primary active dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="https://ascelibrary.org/doi/10.1061/9780784484869.214">ASCE Library</a></li>
    <li><a href="https://yunqing-jia.github.io/JTRC/assets/JMTR_2204Paper.pdf">Github</a></li>
  </ul>
</div>
<a href="https://yunqing-jia.github.io/JTRC/jmtr/JMTR_2204S.pdf" class="btn btn-slide active" aria-pressed="true">Slide</a>
<a href="https://github.com/Yunqing-Jia/JMTR_2204C" class="btn btn-info active" aria-pressed="true">Code</a>
<a href="#" class="btn btn-cite active" onclick="toggleBibtex('bibtex-2204')">Cite</a>
</div>

<div id="bibtex-2204" class="bibtex-box" style="display: none; margin-top: 10px; max-width: 100%;">
  <textarea class="form-control" rows="8" readonly>
@incollection{jia2023joint,
  title={Joint Optimization of Time-of-Day Intervals and Robust Signal Timing for Isolated Intersection},
  author={Jia, Yunqing and An, Chengchuan and Lu, Zhenbo and Xia, Jingxin},
  booktitle={CICTP 2023},
  pages={2265--2275}
}
  </textarea>
</div>

<br>
<div class="intro">
[3] <b>Jia, Y.</b>, & Chen, X. (*). (2021). Pre-signal installation optimization to improve the operations of arterial management and control system with contraflow left-turn lanes. <i>The 20th and 21st Joint COTA International Conference of Transportation Professionals (CICTP20-21)</i>, December 17-20, 2021, Xi'an, China
</div>
<br>
<div class="intro">
[4] <b>Jia, Y.</b>, & Chen, X. (*). (2021). Arterial management and control system with contraflow left-turn lanes: An environmentally-friendly perspective. <i>The 20th and 21st Joint COTA International Conference of Transportation Professionals (CICTP20-21)</i>, December 17-20, 2021, Xi'an, China
</div>
<br>
<div class="intro">
[5] <b>Jia, Y.</b>, & Chen, X. (*). (2019). Dynamic Traffic Signal Control Optimization for the Intersection with Contraflow Left-turn Lanes. <i>19th COTA International Conference of Transportation Professionals (CICTP2019)</i>, July 6-8, 2019, Nanjing, China
</div>

<br>

<div class="intro">
[6] <b>Jia, Y.</b>, & Chen, X. (*). (2019). Traffic Signal Coordination Control Optimization for Reducing Traffic Emissions of Intersection with Contraflow Left-turn Lane. <i>World Transport Convention (WTC2019)</i>, June 13-16, 2019, Beijing, China
</div>

<div class="btn-toolbar" role="toolbar">
  <div class="btn-group">
    <a href="#" class="btn btn-video active" onclick="playVideo('https://yunqing-jia.github.io/JTRC/assets/JMTR_2019V1.mp4')">Video</a>
    <a href="#" class="btn btn-video active dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li><a href="#" onclick="playVideo('https://yunqing-jia.github.io/JTRC/assets/JMTR_2019V1.mp4')">Video 1</a></li>
      <li><a href="#" onclick="playVideo('https://yunqing-jia.github.io/JTRC/assets/JMTR_2019V2.mp4')">Video 2</a></li>
    </ul>
  </div>
</div>

<div id="video-box" class="video-box" style="display: none; margin-top: 10px;">
  <video id="video-player" width="640" height="360" controls>
    <source src="" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<script>
function toggleBibtex(id) {
  const box = document.getElementById(id);
  box.style.display = box.style.display === "none" ? "block" : "none";
}
  
function toggleVideoBox() {
  const box = document.getElementById('video-box');
  box.style.display = (box.style.display === 'none') ? 'block' : 'none';
}

function playVideo(videoUrl) {
  const box = document.getElementById('video-box');
  const player = document.getElementById('video-player');
  player.src = videoUrl;
  player.load();
  player.play();
  box.style.display = 'block';
}
</script>
