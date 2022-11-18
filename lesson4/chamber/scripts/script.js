WebFont.load({
    google: {
        families: [
            'Acme'
        ]
    }
})


// Set the year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear()

// Set the date when last updated
var temp = document.lastModified
var n = parseInt(temp.substring(temp.length-8,temp.length-6))
if (n>12) {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp.substring(0,temp.length-8)+(n-12)+temp.substring(temp.length-6)+" pm"
}
else {
    document.getElementById("updated").innerHTML = "Last Updated: "+
        temp+" am"
}

function scrollDown(elem) {
    if (elem.scrollTop < 100) {
        document.querySelector('#scroll-down').className = "up"
    }
    else {
        document.querySelector('#scroll-down').className = ""
    }
    const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
}

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")

}

const x = document.getElementById('hamburgerBtn');
x.oneclick = toggleMenu;

