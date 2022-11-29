let banner;
const currentDay = new Date().getDay();

switch(currentDay) {
    case 0:
        banner = "";
        break;
    case 1:
        banner = "🤝🏼 Come join us for the chamber meet and greet Wensday 07:00 p.m";
        break; 
    case 2:
        banner = "🤝🏼 Come join us for the chamber meet and greet Wensday 07:00 p.m";
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