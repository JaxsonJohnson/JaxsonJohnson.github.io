const apikey = "0d497b0c7a89c8bfe35166fd90cb24a2";
const baseURL = "https://api.openweathermap.org/data/2.5/";
let cityid = "5604473";
let units = "imperial";
let method = "weather";
let apiURL = baseURL +
             method + '?' +
             'id=' + cityid +
             '&APPID=' + apikey +
             '&units=' + units;

fetch(apiURL)
   .then(response => response.json())
   .then(data => {
      console.log(data);
      document.getElementById('current-temp').textContent = data.main.temp;
      document.getElementById('current-humid').textContent = data.main.humidity;
      document.getElementById('current-speed').textContent = data.wind.speed;
      document.getElementById('current-current').textContent = data.weather.main;
      const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      const desc = data.weather[0].description;
      document.getElementById('imagesrc').textContent = imagesrc;
      document.getElementById('icon').setAttribute('src', imagesrc);
      document.getElementById('icon').setAttribute('alt', desc);
   });
// Get forecast data and filter out only 18:00:00
method = 'forecast';
apiURL = baseURL +
         method + '?' +
         'id=' + cityid +
         '&APPID=' + apikey +
         '&units=' + units;
// Array to convert a date.getDay() to a day of the week name
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


fetch(apiURL)
.then(response => response.json())
   .then(data => {
      console.log('Forecast data:');
      console.log(data);
      // Array of all the div's with the ".temp" class
      let forecast_temps = document.querySelectorAll('.forecast-day .temp');
      // Array of all the div's with the ".dow" class
      let forecast_dow = document.querySelectorAll('.forecast-day .dow');
      // Counter to keep track of which of the five days we are on
      let forecast_day_num = 0;
      // The "list" property in the forecast JSON string
      let list = data.list;
      // Loop through each item in the list of forecasts
      for (item of list) {
         // We only want the forecast for 18:00:00 each day
         if (item.dt_txt.includes('18:00:00')) {
            // Pull out the day of the week
            let date = new Date(item.dt * 1000);
            forecast_dow[forecast_day_num].innerHTML = DOW[date.getDay()];
            // Pull out temperature
            forecast_temps[forecast_day_num].innerHTML = item.main.temp + "&deg;F";
            forecast_day_num++;
         }
      }
   });