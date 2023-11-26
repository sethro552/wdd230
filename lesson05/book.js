String.prototype.capitalize = function() {
    return this.slice(0, 1).toUpperCase() + this.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const list = document.querySelector("ul");

    button.addEventListener("click", () => {
        if(input.value.trim() === "") { return; }
        let li = document.createElement("li");
        li.classList.add("chapter-container");
        let h4 = document.createElement("h4");
        h4.innerText = input.value.capitalize();
        let btn = document.createElement("button");
        btn.classList.add("delete");
        btn.innerText = "X";
        
        btn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
        li.append(...[h4, btn]);
        list.append(li);
        input.value = "";
        input.focus();
    });
});