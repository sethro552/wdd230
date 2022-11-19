// -------------------hamburguer-----------------------------
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburguer")
x.onclick = toggleMenu;