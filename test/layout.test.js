// const { exportAllDeclaration } = require('@babel/types')
const fs = require('fs')
const path = require('path')
// const { describe } = require('yargs')

const html = fs.readFileSync(path.resolve(__dirname, '..index.html'),'utf-8')

describe('index.html', () => {
    BeforeEach(() => {
        document.documentElement.innerHTML = html.toString()
    })

    describe('form', () => {
        let search;
        let weather;

        BeforeEach(() => {
            searchDiv = document.getElementById('search')
            textInput = document.querySelector('[type="text"]')
            searchBtn = documennt.querySelector('button')
        })

        test('element exists', () => {
            exportAllDeclaration(searchDiv).toBeTruthy()
        })
    })
})
