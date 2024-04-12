
const cityNameInputEl = $('#city-input');
const searchBtnEl = $('#search-btn');
const tempEl  = $('#temp');
const windEl  = $('#wind');
const humidityEl  = $('#humidity');
const currentCityEl = $('#current-city');




// Fetch weather data from API
async function getWeatherData(city) {

    const apiKey = 'ed808e9a059e9ac8cb326e3da2af38ca'; 
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}
// this code reads the user input
function fetchWeather() {

const cityName = cityNameInputEl.val();



// Pulls the weather data and console logs it, or if an error is received, console logs an error
getWeatherData(cityName)
    .then(data => {
        console.log(data);
        const citySelect = data.city.name;
        currentCityEl.text(citySelect);
        const tempData = data.list[0].main.temp
        tempEl.text(tempData)
        const windData = data.list[0].wind.speed
        windEl.text(windData)
        const humidityData = data.list[0].main.humidity
        humidityEl.text(humidityData)
    })
    .catch(error => {
        console.error(error);
    });
}

searchBtnEl.on('click', fetchWeather);

function displayWeekForecast() {

    let city = currentCityEl.value();
    console.log(city)

    let findCity = data.filter(item => {
        return item.city.name === city
    })
    
console.log(findCity)

    const selectedData = [
        data.list[0].main,
        data.list[8].main,
        data.list[16].main,
        data.list[24].main,
        data.list[32].main,

    ]
renderFiveDays(selectedData);

}

// this takes the data received from the get weather function and saves it to local storage

function saveWeatherDataToStorage(data) {
    localStorage.setItem('weatherData', JSON.stringify(data));


}
// this code reades the weather data from local storage 
function readWeathDataFromStorage() {
    const weatherData = localStorage.getItem('weatherData');
    return JSON.parse(weatherData);
}

function displayCityHistory () {

}


