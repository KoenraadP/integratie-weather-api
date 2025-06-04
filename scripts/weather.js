"use strict";

// api key en api url in constanten opslaan
const apiKey = "9f0b2498bc5c13f59ed35457a7418d68";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

// html elementen binden
const inpSearch = document.getElementById("search-input");
const btnSearch = document.getElementById("search-button");
const tdWeatherGeneral = document.getElementById("weather-general");
const tdHumidity = document.getElementById("humidity");
const tdCurrentTemp = document.getElementById("current-temp");
const tdMaxTemp = document.getElementById("max-temp");
const tdMinTemp = document.getElementById("min-temp");

// data ophalen voor gekozen stad wanneer we op de knop klikken
btnSearch.addEventListener("click", () => {
    // stadsnaam uit input halen
    const city = inpSearch.value.trim();
    // correcte endpoint maken
    // zie voorbeeld op https://openweathermap.org/current
    const endpoint = `${apiUrl}&appid=${apiKey}&q=${city}&units=metric&lang=nl`;
    // data ophalen met fetch
    fetch(endpoint)
        .then(response => {
            if(response.ok) return response.json();
            else throw new Error("Stad niet gevonden!");
        })
        .then(data => {
            console.log(data);
            console.log(data.weather[0].description);
            const img = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
            tdWeatherGeneral.innerHTML = img;
            tdWeatherGeneral.innerHTML += data.weather[0].description;
            tdHumidity.innerHTML = data.main.humidity;
            tdCurrentTemp.innerHTML = data.main.temp;
            tdMaxTemp.innerHTML = data.main.temp_max;
            tdMinTemp.innerHTML = data.main.temp_min;
        })
        .catch(error => {
            alert(error.message);
        })
})