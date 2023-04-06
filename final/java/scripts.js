document.getElementById("menubutton").addEventListener("click", function(){
    document.getElementById("mainnav").classList.toggle("responsive");
}, false);
if(document.getElementById("time")){
    var lastVisit = localStorage.getItem("lastVisit") || new Date().getTime();
    var thisVisit = new Date().getTime();
    localStorage.setItem("lastVisit", thisVisit);
    var timeDiff = Math.abs(thisVisit - lastVisit);
    ////console.log(timeDiff);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    document.getElementById("time").innerHTML = "You last visited this page " + diffDays + " day" + (diffDays == 1 ? "" : "s") + " ago.";
}
if(document.getElementById("datetime")){
    var d = new Date();
    var n = d.toISOString();
    document.getElementById("datetime").value = n;
}
const url = '/wdd230/chamber/data/members.json';

async function apiFetch1() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        doAThing1(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        ////console.log(error);
    }
}

function doAThing1(jsObject) {
    let members = document.getElementById('members');
    members.innerHTML = '';
    jsObject.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        var picture = document.createElement('picture');
        var img = document.createElement('img');
        img.setAttribute('src', element.icon);
        img.setAttribute('alt', element.name);
        picture.appendChild(img);
        card.appendChild(picture);
        var hr1 = document.createElement('hr');
        card.appendChild(hr1);
        var name = document.createElement('h3');
        name.textContent = element.name;
        card.appendChild(name);
        var address = document.createElement('p');
        address.textContent = element.address;
        card.appendChild(address);
        var phone = document.createElement('p');
        phone.textContent = element.phone;
        card.appendChild(phone);
        var website = document.createElement('a');
        website.href = element.website;
        website.textContent = element.website.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '');
        card.appendChild(website);
        var description = document.createElement('p');
        description.textContent = element.description;
        card.appendChild(description);
        var hr2 = document.createElement('hr');
        card.appendChild(hr2);
        var membership = document.createElement('p');
        membership.classList.add('membership');
        membership.classList.add(element.membership.toLowerCase());
        membership.textContent = element.membership + ' Member';
        card.appendChild(membership);
        members.appendChild(card);
    });
}
if(document.getElementById('members')){
    apiFetch1();
    document.getElementById('toggle').addEventListener('click', function() {
        let members = document.getElementById('members');
        members.classList.toggle('list');
        if(members.classList.contains('list')){
            document.getElementById('toggle').textContent = 'Grid View';
        } else {
            document.getElementById('toggle').textContent = 'List View';
        }
    });
}
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('caption-desc');

// i wrapped the api in a php proxy to add some basic security and hide my api key.
// forgive me for not using the api key in the url like the instructions said but i felt like this was a better way to do it.
// even if it is beyond the scope of this class.
const surl1 = 'https://byui.projectpine.com/api_proxy.php?q=London,uk&units=metric';
const surl2 = 'https://byui.projectpine.com/api_proxy.php?endpoint=forecast&q=London,uk&units=metric';

async function apiFetch2() {
    try {
        const response = await fetch(surl1);
        if (response.ok) {
        const data = await response.json();
        display1(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        //console.log(error);
    }
}
if(currentTemp && weatherIcon && captionDesc){
    apiFetch2();
    apiFetch2andabit();
}

function display1(data) {
    currentTemp.innerHTML = data.main.temp+"&deg;C"; 
    const iconsrc = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
async function apiFetch2andabit() {
    try {
        const response = await fetch(surl2);
        if (response.ok) {
        const data = await response.json();
        display2(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        //console.log(error);
    }
}
if(currentTemp && weatherIcon && captionDesc) apiFetch2();

function display2(data) {
    //console.log(data);
    const currentTemp1 = document.getElementById('current-temp1');
    const weatherIcon1 = document.getElementById('weather-icon1');
    const captionDesc1 = document.getElementById('caption-desc1');
    const currentTemp2 = document.getElementById('current-temp2');
    const weatherIcon2 = document.getElementById('weather-icon2');
    const captionDesc2 = document.getElementById('caption-desc2');
    const currentTemp3 = document.getElementById('current-temp3');
    const weatherIcon3 = document.getElementById('weather-icon3');
    const captionDesc3 = document.getElementById('caption-desc3');
    const iconsrc1 = "https://openweathermap.org/img/w/"+data.list[1].weather[0].icon+".png";
    let desc1 = data.list[1].weather[0].description;
    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    captionDesc1.textContent = desc1;
    currentTemp1.innerHTML = data.list[1].main.temp+"&deg;C"; 
    const iconsrc2 = "https://openweathermap.org/img/w/"+data.list[2].weather[0].icon+".png";
    let desc2 = data.list[2].weather[0].description;
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = desc2;
    currentTemp2.innerHTML = data.list[2].main.temp+"&deg;C"; 
    const iconsrc3 = "https://openweathermap.org/img/w/"+data.list[3].weather[0].icon+".png";
    let desc3 = data.list[3].weather[0].description;
    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = desc3;
    currentTemp3.innerHTML = data.list[3].main.temp+"&deg;C"; 

}
async function apiFetch3() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        doAThing(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        ////console.log(error);
    }
}

function doAThing(jsObject) {
    var length = jsObject.length;
    var final = [];
    while(final.length < 3){
        var random = Math.floor(Math.random() * length) + 1;
        if((jsObject[random].membership == "Gold" || jsObject[random].membership == "Silver") && final.indexOf(jsObject[random]) == -1){
            final.push(jsObject[random]);
        }
    } 
    makeThings(final);
}
function makeThings(items){
    var i = 1;
    items.forEach(item => {
        document.getElementById("p" + i).src = item.icon;
        document.getElementById("t" + i).innerHTML = item.name;
        document.getElementById("d" + i).innerHTML = item.description;
        i++;
    });
}
apiFetch3();



//Monday, Tuesday, or Wednesdays only
var d = new Date();
var n = d.getDay();
if(n == 1 || n == 2 || n == 3){
    bannerthing();
}
var running = false;
function bannerthing(){
    var banner = document.createElement("div");
    banner.setAttribute("class", "meeting-banner");
    banner.innerHTML = "JOIN A MEETING TODAY";
    banner.id = "meeting-banner";
    banner.addEventListener("click", function(){
        removeBanner();
    });
    document.body.appendChild(banner);

    setTimeout(function(){
        removeBanner();
    }, 5000);
}
function removeBanner(){
    if(running) return;
    var banner = document.getElementById("meeting-banner");
    var top = parseFloat(window.getComputedStyle(banner).getPropertyValue("top"));
    if(top < -window.getComputedStyle(banner).getPropertyValue("height")){
        banner.remove();
        running = false;
        return;
    }
    banner.style.top  = top - 5 + "px";
    setTimeout(function(){
        removeBanner();
    }, 5);
}
document.getElementById("moddate").innerHTML = document.lastModified;