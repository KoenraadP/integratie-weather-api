"use strict";

// api key en api url in constanten opslaan
const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

// html elementen binden
const inpSearch = document.getElementById("search-input");
const btnSearch = document.getElementById("search-button");
const tdWeatherGeneral = document.getElementById("weather-general");
const tdHumidity = document.getElementById("humidity");
const tdCurrentTemp = document.getElementById("current-temp");
const tdMaxTemp = document.getElementById("max-temp");
const tdMinTemp = document.getElementById("min-temp");