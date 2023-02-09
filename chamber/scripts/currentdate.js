const d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();

let lastUpdate = ('Last Modification: ' + document.lastModified);
document.getElementById("lastupdate").innerHTML = lastUpdate;