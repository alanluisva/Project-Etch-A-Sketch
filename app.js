const container = document.querySelector("#container");
const button = document.querySelector("button");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

let divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});

function createGrid() {
    let squares = Number(prompt("How many squares per side? (Maximum: 100)"));
    container.textContent = "";

    while (squares > 100 || squares < 0 || !Number.isInteger(squares)) {
        squares = Number(
            prompt("You must enter a positive integer. (Maximum: 100) ")
        );
    }

    for (let i = 0; i < squares * squares; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        let side = `${608 / squares}`;
        div.style.height = `${side}px`;
        div.style.width = `${side}px`;
        container.appendChild(div);
    }

    let divs = document.querySelectorAll(".square");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
    });
}

button.addEventListener("click", createGrid);
