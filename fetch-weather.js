var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Boulder&units=imperial&appid=c6d3a54d19266b420ab3e8b0e5deb10c';

request({
  url: url,
  json: true
}, function (error, response, body) {
  if (error) {
    console.log('Unable to get weather data.');
  } else {
    console.log('It is currently ' + body.main.temp + ' degrees in ' + body.name + '!');
  }
});