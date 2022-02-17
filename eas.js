const gridContainer = document.querySelector(".grid-container");
const clearBtn = document.querySelector("#clear-btn");
const gridBtn = document.querySelector("#grid-btn");

function displayGrid() {
  generateGrid();
  changeGridSize();
  changeColor();
  clearColor();
}

function generateGrid(userInput = 16) {
  for (let row = 0; row < userInput; row++) {
    const boxContainer = document.createElement("div");
    boxContainer.classList.add("box-container");
    for (let column = 0; column < userInput; column++) {
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

function removeGrid() {
  document.querySelectorAll(".box-container").forEach((container) => {
    container.remove();
  });
}

function changeGridSize() {
  gridBtn.addEventListener("click", () => {
    let userInput = parseInt(prompt("Enter grid size:"));
    if (userInput <= 100) {
      removeGrid();
      generateGrid(userInput);
      changeColor();
      clearColor();
    } else if (userInput > 100) {
      alert("ERROR! The maximum value is 100. Try again.");
    }
  });
}

displayGrid();
