const map_search = document.getElementById("map-search");
const map_btn = document.getElementById("map-btn");
const city_list = document.getElementById("city-list");
const watch = document.getElementById("watch");
const map = document.getElementById("map");

function startClock () {
    const clockInterval = setInterval(()=> {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById("watch").textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
startClock();

