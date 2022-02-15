const gridContainer = document.querySelector(".grid-container");

function generateGrid() {
  for (let row = 0; row < 16; row++) {
    const boxContainer = document.createElement("div");
    boxContainer.classList.add("box-container");
    for (let column = 0; column < 16; column++) {
      const box = document.createElement("div");
      box.classList.add("box");
      boxContainer.appendChild(box);
    }
    gridContainer.appendChild(boxContainer);
  }
}

function changeColor() {
  const squares = document.querySelectorAll(".box");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  });
}
generateGrid();
changeColor();
