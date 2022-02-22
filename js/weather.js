const API_KEY = "51c65cbea3abb6c7ce0a1fc8afa42539"
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(loc){
    const lat = loc.coords.latitude;
    const lng = loc.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
         });
}

function onGeoError(){
    alert("Can't find you. no weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)