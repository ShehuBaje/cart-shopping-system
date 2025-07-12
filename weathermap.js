const axios = require("axios")
const prompt = require("prompt-sync")();

const API_KEY = "4f71a92982d52f35bdeaae7876a325cc";

const city = prompt("Enter a city name: ");

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
   .then(response => {
    const weather = response.date;
    console.log(`\nweather in ${weather.name}, ${weather.sys.country}:`);
    console.log(`Temperature: ${weather.main.temp}degree celcius`);
    console.log(`Condition: ${weather.weather[0].description}`);
   })
   .catch(error => {
    if (error.response) {
        console.log("\n[warning] API responded with an error:");
        console.log("Status Code:",error.response.status);
        console.log("Message:",error.response.data.message);
    } else {
        console.log("\n[Error]:",error.message);
    }
   });


