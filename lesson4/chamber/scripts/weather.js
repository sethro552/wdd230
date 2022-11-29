// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind_speed');
const url = "https://api.openweathermap.org/data/2.5/weather?id=3911925&units=imperial&appid=57d16f210f6741a79b3b085f67258384";

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
    } else { 
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
//  ------------------------------- Display data -------------------------------------------
function  displayResults(weatherData) {
    let tempN = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = tempN;
    minTemp.innerHTML = `${weatherData.main.temp_min.toFixed(0)}`;
    maxTemp.innerHTML = `${weatherData.main.temp_max.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`; 
    chill.innerHTML = windchillData(tempN, weatherData.wind.speed.toFixed(0));
// --------------------------------- icon --------------------------------------------------

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase(); //weather information in uppercase
}
let speed1 = parseFloat(minTemp.textContent);
console.log(speed1);
// ------------------- windchill ----------------------------

function windchillData(tempN, windN){
    if (tempN <= 60 && windN >= 3 ){
        windChillFactor = 35.74 + 0.6215 * Number(tempN) - 35.75 * Math.pow(Number(windN), 
        0.16) + 0.4275 * Number(tempN) * Math.pow(Number(windN), 0.16);
        console.log(windChillFactor)
        windChillFactor = Math.floor(windChillFactor);
        return windChillFactor;

}   else if (tempN > 50 || windN < 3){
        windChillFactor  = "N/A";
        console.log(windChillFactor)
        return windChillFactor;
}
}