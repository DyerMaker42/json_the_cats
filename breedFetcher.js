const request = require('request');
// cut full cat name down to first four letters
let fullCatName = process.argv[2];
let catName = fullCatName.split('').slice(0, 4).join('')


request(`https://api.thecatapi.com/v1/images/search?breed_ids=${catName}`, (err, resp, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].breeds[0].description);
  } else {
    console.log(`Oh meow! That breed wasn't found. Please try again`);
  }
}

)