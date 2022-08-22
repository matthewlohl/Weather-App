/**
 * @jest-environment-jsdom
 */

const fs = require('fs')
const path = require ('path')
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'))
const app = require('../static/js/app.js')


module.exports = app
