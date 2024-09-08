const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

function cambiarColor() {
  this.style.backgroundColor = "black";
}

div1.addEventListener("click", cambiarColor);
div2.addEventListener("click", cambiarColor);
div3.addEventListener("click", cambiarColor);
div4.addEventListener("click", cambiarColor);

//CAMBIAR COLOR A DIV

const divKey = document.getElementById("key");
let color;
let newDiv = null;

function createDiv(color) {
  if (!newDiv) {
    newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
  } else {
    newDiv.style.backgroundColor = color;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
  } else if (event.key === "s") {
    color = "orange";
  } else if (event.key === "d") {
    color = "lightblue";
  } else if (event.key === "q") {
    createDiv("purple");
  } else if (event.key === "w") {
    createDiv("gray");
  } else if (event.key === "e") {
    createDiv("brown");
  }

  divKey.style.backgroundColor = color;
});
