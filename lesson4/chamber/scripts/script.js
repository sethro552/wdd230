// -------------------hamburger-----------------------------
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburguer")
x.onclick = toggleMenu;

// -------------date-----------
const date=new Date()
const formattedDate=new Intl.DateTimeFormat("en-UK",{datestyle: "full"}).format(date);
document.querySelector("#formatted-date").innerHTML=formattedDate;

// --------year-----------------
var year=date.getFullYear()
document.querySelector("#year").innerHTML=year;

// ------------last modify------------------
let d= document.lastModified;
document.querySelector("#last-modify").innerHTML=d;