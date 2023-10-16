var searchBtn = document.getElementById("search-button")
var city = document.getElementById("city")
var forecast = document.getElementById("forecast")

searchBtn.addEventListener("click", function() {
    var inputText = document.getElementById("input").value.trim();
    getForecast(inputText);
});

function getForecast(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=74d2f8c55d49194744b26e13accfaeeb`;

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not ok.");
            }
        })
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log("There was a problem with the fetch operation: " + error);
})
}