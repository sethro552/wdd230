document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("modified").innerHTML = document.lastModified;

var views = localStorage.getItem('views') || 0;
views++;
document.getElementById("views").innerHTML = "You have visited this page " + views + " time" + (views == 1 ? '' : 's');
localStorage.setItem('views', views);