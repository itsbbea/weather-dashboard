var searchBtn = document.getElementById("search-button")
var city = document.getElementByClass("city")
var forecast = document.getElementByClass("forecast")

function getForecast() {
    var inputText = document.getElementById("input").value.trim();
    saveSearchHistory(inputText)
    fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon:{lon}&appid,{API,key}).then(function (input) {


    })


}