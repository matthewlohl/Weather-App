(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//const { text } = require('stream/consumers')
const app = require('./app')

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
        document.querySelector('#weather_icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    })  
}

// const displayweather = (data) => {
//     document.querySelector('#city').innerText = data.name
//     document.querySelector('#id').innerText = data.main_temp
// }

// fetchweather()

module.exports = {fetchweather}


},{"./app":1}],2:[function(require,module,exports){
const app = require('./app')

console.log('bundle.js is linked')



const submit = document.querySelector('#search-btn');
submit.addEventListener('click',  () =>  {
    const text = document.querySelector('#location').value;
    console.log(text)
    app.fetchweather(text)
});

},{"./app":1}]},{},[2]);
