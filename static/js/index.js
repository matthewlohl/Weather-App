const app = require('./app')

console.log('bundle.js is linked')



const submit = document.querySelector('#search-btn');
submit.addEventListener('click',  () =>  {
    const text = document.querySelector('#location').value;
    console.log(text)
    app.fetchweather(text)
});
