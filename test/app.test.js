/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const { request } = require('http')
const path = require ('path')
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'))
const {fetchweather} = require('../static/js/app.js')
//const app = require('../static/js/app.js')
jest.mock('../static/js/app.js')

describe ('App.JS.',() => {
    describe ('Able to update HTML from API', () => {
        
        it ('City name updated', () => {
            const city_name = 'London';
            fetchweather(city_name);
            document.documentElement.innerHTML = html.toString();
            const city = document.querySelector('#city');
            expect(city.textContent).toBe('Birmingham')
        })
    })

})
