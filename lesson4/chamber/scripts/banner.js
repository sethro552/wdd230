let banner;
const currentDay = new Date().getDay();

switch(currentDay) {

    case 1:
        banner = "🤝🏼 Stop by during our business hours 8:00am - 5:30pm Monday | Friday";
        break; 
    case 2:
        banner = "🤝🏼 ";
        break;
    case 3:
        banner = "";
        break;    
    case 4:
        banner = "";
        break;
    case 5:
        banner = "";
        break;
    case 6:
        banner = "";
        break;
}

document.getElementById("banner").innerHTML = banner;