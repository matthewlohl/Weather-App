/**
 * @jest-environment jsdom
 */
//const { exportAllDeclaration } = require('@babel/types')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'),'utf-8')

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString() // rest the state of DOM
    })

    describe('search Weather', () => {        
        beforeEach(() => {
            searchDiv = document.querySelector('#search').childElementCount
            textInput = document.querySelector('[type="text"]')
            searchBtn = document.querySelector('button')
        })
        
        test('search Div contains 3 childs: label, input, btn', () => {
            expect(searchDiv).toBe(3);
        })

        test('input box exists', () => {
            expect(textInput).toBeTruthy();
        })

        test('Search button exists', () => {
            expect(searchBtn).toBeTruthy();
        })
    
        
    })
       
})
