const temperature = document.querySelector('#temp');
const wind = document.querySelector('#windspeed');
const description = document.querySelector('#desc');
const forecast = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-111.96&units=imperial&appid=https://api.openweathermap.org/data/2.5/forecast?lat=41.31&lon=-111.96&units=imperial&appid=3f6afd9e40a5f5a3d64f9057c4a5cb7a';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.31&lon=-111.96&units=imperial&appid=3f6afd9e40a5f5a3d64f9057c4a5cb7a';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const response2 = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            console.log(data2);
            displayResults(data);
            displayForecast(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    let temp = Math.round(data.main.temp);
    let calcWindSpeed = data.wind.speed;
    temperature.innerHTML = temp;
    description.innerHTML = desc;
    wind.innerHTML = Math.round(calcWindSpeed);


    const airTemp = temperature.innerHTML;
    const windSpeed = wind.innerHTML;
    function calculate(airTemp, windSpeed) {
        if (airTemp <= 50 && windSpeed > 3.0) {
            let windChill = (35.74 + .6215 * airTemp - 35.75 * windSpeed ** 0.16 + 
                .4275 * airTemp * windSpeed ** 0.16);
            return windChill.toFixed(0);
        } else {
            return 'N/A';
        };
    };

    document.getElementById('feelsLike').innerHTML = calculate(airTemp, windSpeed);
}


function displayForecast(data2) {
    let day1High = Math.round(data2.list[0].main.temp);
    let day1Low = Math.round(data2.list[5].main.temp);
    let day2High = Math.round(data2.list[13].main.temp);
    let day2Low = Math.round(data2.list[10].main.temp);
    let day3High = Math.round(data2.list[21].main.temp);
    let day3Low = Math.round(data2.list[18].main.temp);

    forecast.innerHTML = `3 Day Upcoming Forecast: <br>➤ H: ${day1High}&deg;F — L: ${day1Low}&deg;F <br>➤ H: ${day2High}&deg;F — L: ${day2Low}&deg;F <br>➤ H: ${day3High}&deg;F — L: ${day3Low}&deg;F`;
}