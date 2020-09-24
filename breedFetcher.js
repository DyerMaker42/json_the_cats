const request = require('request');
// cut full cat name down to first four letters
let breed = process.argv(2)

request(`https://api.thecatapi.com/v1/breeds/search`)