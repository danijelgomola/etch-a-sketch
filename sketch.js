const container = document.querySelector(".container");
const createGridBtn = document.querySelector(".create-grid-btn");
const colorizeBtn = document.querySelector(".colorize-btn");
const monochromeBtn = document.querySelector(".monochrome-btn");
const resetBtn = document.querySelector(".reset-btn");

const DEFAULT_GRID_SIZE = 10;

function defineGridSize() {
    let gridSize = 0;

    do {
        let input = prompt("What number of squares per side do you want (max 100)?");

        if (input === "" || input === null) {
            return false;
        }

        gridSize = parseInt(input);
    } while (gridSize > 100 || gridSize <= 0 || isNaN(gridSize));

    resetGrid();
    createGrid(gridSize);
}

function resetGrid() {
    container.textContent = "";
}

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const rows = document.createElement("div");
        rows.classList.add("rows");
        container.appendChild(rows);

        for (let j = 0; j < n; j++) {
            const cols = document.createElement("div");
            cols.classList.add("cols");
            rows.appendChild(cols);

            colorizeBtn.addEventListener("click", () => {
                cols.addEventListener("mouseover", () => {
                    cols.style.backgroundColor = generateRandomColor();
                });
            });
        
            monochromeBtn.addEventListener("click", () => {
                cols.addEventListener("mouseover", () => {
                    cols.style.backgroundColor = "black";
                });
            });
        }
    }
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

createGridBtn.addEventListener("click", defineGridSize);

resetBtn.addEventListener("click", () => {
    resetGrid();
    createGrid(DEFAULT_GRID_SIZE);
});

createGrid(DEFAULT_GRID_SIZE);