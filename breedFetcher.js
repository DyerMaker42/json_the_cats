const request = require('request');
// cut full cat name down to first four letters
let fullCatName = process.argv[2];
let catName = fullCatName.split('').slice(0,4).join('')
console.log(catName)
//request(`https://api.thecatapi.com/v1/breeds/search`)