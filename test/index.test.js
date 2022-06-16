const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    describe('header', () => {
        test('it has a title', () => {
            const title = document.querySelector('title');
            expect(title).toBeTruthy();
            expect(title.innerHTML).toContain('Celebration Card')
        })
        test('it has a h1', () => {
            const h1 = document.querySelector('h1');
            expect(h1).toBeTruthy();
        }) 
    }) 

    describe('main content', () => {
        test('it has a form', () => {
            const form = document.querySelector('form');
            expect(form).toBeTruthy();
            // expect(form.innerHTML).toContain('Celebration Card')
        })
         test('it has a h1', () => {
            const h1 = document.querySelector('h1');
             expect(h1).toBeTruthy();
        }) 
    }) 

}) ///main exit bracket
