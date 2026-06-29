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
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() +1).padStart(2, '0');
        const year = now.getFullYear();

        watch.textContent = `${hours}:${minutes}:${seconds} | ${day}/${month}/${year}`;
    }, 1000);
}
startClock();
let cities = [];
async function getCities () {
    const response = await fetch('/cities.json');
    cities = await response.json();
    getWeather(cities);
    console.log(cities);
} 
    getCities();

async function getWeather(cities) {
    for (const city of cities) {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=0561c16f3bbda1b2fadb5a379d664ef9&units=metric`)
        const data = await response.json();
        
        const li = document.createElement('li');
        li.textContent = `${city.name}: ${data.main.temp}°C`;
        city_list.appendChild(li);
        
        L.marker([city.latitude, city.longitude])
        .addTo(myMap)
        .bindPopup(`${city.name}: ${data.main.temp}°C`);
    }
    }

map_btn.addEventListener("click", async()=> {
    const searchValue = map_search.value.toLowerCase();
    const filtered = cities.filter(city => city.name.toLowerCase().includes(searchValue));
    
    city_list.innerHTML = "";
    for (const city of filtered) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=0561c16f3bbda1b2fadb5a379d664ef9&units=metric`)
        const data = await response.json();
        console.log(searchValue);

        const li = document.createElement('li');
        li.textContent = `${city.name}: ${data.main.temp}°C`;
        city_list.appendChild(li);
    }
    });

    const myMap = L.map('map').setView([39.9334, 32.8595], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(myMap);






