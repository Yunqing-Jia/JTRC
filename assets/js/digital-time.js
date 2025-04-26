const cities = [
    { id: 'time-beijing', label: 'Beijing', timeZone: 'Asia/Shanghai' },
    { id: 'time-vienna', label: 'Vienna', timeZone: 'Europe/Vienna' }
  ];
  
function updateClocks() {
  const now = new Date();
  cities.forEach(city => {
    const cityTime = now.toLocaleTimeString('en-US', {
      timeZone: city.timeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    document.getElementById(city.id).textContent = `${city.label}: ${cityTime}`;
  });
}

setInterval(updateClocks, 1000);
updateClocks();