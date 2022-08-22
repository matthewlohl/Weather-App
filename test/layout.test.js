/**
 * @jest-environment-jsdom
 */
//const { exportAllDeclaration } = require('@babel/types')
const fs = require('fs')
const path = require('path')
const { describe } = require('yargs')

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'),'utf-8')

describe('index.html', () => {

        // it('it has a h2', () => {
        //     //document.documentElement.innerHTML = html.toString();
        //     const location = document.querySelector('h2')
        //     expect(location.textContent).toContain('Weather in Birmingham')
        // })
        let searchDiv;
        let searchBtn;

    describe('form', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString()
        })

    

        beforeEach(() => {
            searchDiv = document.getElementById('search')
            textInput = document.querySelector('[type="text"]')
            searchBtn = documennt.querySelector('button')
        })

        test('search Div exists', () => {
            expect(searchDiv).toBeTruthy()
        })
    })
})
