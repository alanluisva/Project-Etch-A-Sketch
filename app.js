const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

const divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});
