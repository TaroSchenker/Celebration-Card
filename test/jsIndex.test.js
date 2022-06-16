const apiHelpers = require('../static/js/api')

const helpers = require('../static/js/helpers')


console.log('tests', apiHelpers, helpers)
global.fetch = require('jest-fetch-mock')


describe('api helpers', () => {
    test('it makes a fetech call to the users github username', () => {
        apiHelpers.fetchData('getfutureproof')
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/getfutureproof')
    })
})


