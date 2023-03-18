const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const url = "data/data.json"

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

function displayResults(companyData) {
	let html = "";
	companyData.forEach(data => {
		html += `
			<section>
                <div class="company-logos">
				<img src="${data.logo}" alt="${data.name} logo" loading="lazy">
                </div>
                <div class="details">
                    <div>
                        <h3>${data.name}</h3>
                        <p>${data.address}</p>
                        <p>${data.phone}</p>
                    </div>
                    <a href="${data.website}">Details</a>
                </div>
            </section>
		`;
	});
	display.innerHTML = html;
}

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			displayResults(data.companies);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

apiFetch();