const h2 = document.createElement("h2");
h2.textContent = "Welcome to Made of Mark";

document.querySelector("body").appendChild(h2);

function changeColor(color) {
    document.querySelector(".box").style.color = color;
}