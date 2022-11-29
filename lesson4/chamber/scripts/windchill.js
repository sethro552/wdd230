let temp = document.querySelector("#current-temp");
let wind = document.querySelector("#wind_speed");

let tempN = parseFloat(temp.textContent);
let windN  = parseFloat(wind.textContent);
// let temp = 40;
// let wind = 5;
// const temp = document.getElementById("temp").value;
// console.log(tempN)

const chill = document.querySelector('#windchill');

const windchill = (tempN, windN) =>{

    if (tempN <= 50 && windN >= 3 ){
        windChillFactor = 35.74 + 0.6215 * Number(tempN) - 35.75 * Math.pow(Number(windN), 
        0.16) + 0.4275 * Number(tempN) * Math.pow(Number(windN), 0.16);
        console.log(windChillFactor)
        windChillFactor = Math.floor(windChillFactor);
        chill.innerHTML = windChillFactor;

}   else if (tempN > 50 || windN < 3){
        windChillFactor  = "N/A";
        console.log(windChillFactor)
        chill.innerHTML = windChillFactor;
}
}
windchill(tempN, windN)
// const temp = document.querySelector('#temp');
// let x = parseFloat(temp.textContent);
// let number = 5;
// const answer = x - number;
// console.log(answer)