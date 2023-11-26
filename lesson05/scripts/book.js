const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    myBook = input.value;
    input.value = "";

    let liBook = document.createElement('li');
    let liText = document.createElement('span');
    let liButton = document.createElement('button')

    liBook.appendChild(liText);
    liText.textContent = myBook;
    liBook.appendChild(liButton);
    liButton.textContent = "❌";
    list.appendChild(liBook);

    liButton.addEventListener('click', () => {
        list.removeChild(liBook)
    });

    input.focus();
});