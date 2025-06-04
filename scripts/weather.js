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
    const endpoint = `${apiUrl}&appid=${apiKey}&q=${city}`;
    // data ophalen met fetch
    fetch(endpoint)
        .then(response => {
            if(response.ok) return response.json();
            else throw new Error("Stad niet gevonden!");
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            alert(error.message);
        })
})