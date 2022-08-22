const app = require('./app.js')

console.log('app.js is linked')
function fetchweather (city) {
    let apiKey = "574be141045fd202821891433c4208b7"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#city').innerText = data.name;
        document.querySelector('#temperature').innerText = data.main.temp;
        document.querySelector('#max_temperature').innerText = data.main.temp_max;
        document.querySelector('#min_temperature').innerText = data.main.temp_min;
        document.querySelector('#humidity').innerText = data.main.humidity
        document.querySelector('#description').innerText = data.weather[0].description
    })  
}

// const displayweather = (data) => {
//     document.querySelector('#city').innerText = data.name
//     document.querySelector('#id').innerText = data.main_temp
// }

// fetchweather()

module.exports = {fetchweather}

