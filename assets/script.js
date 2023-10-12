var searchBtn = document.getElementById("search-button")
var city = document.getElementById("city")
var forecast = document.getElementById("forecast")

searchBtn.addEventListener("click", function() {
    var inputText = document.getElementById("input").value.trim();
    getForecast(inputText);
});

