const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector("#clear-btn");
generateGrid();
changeColor();
clearColor();

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

function clearColor() {
  clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((square) => {
      square.style.backgroundColor = "";
    });
  });
}
