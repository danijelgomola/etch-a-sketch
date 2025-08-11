const container = document.querySelector(".container");
const createGridBtn = document.querySelector(".create-grid-btn");

const DEFAULT_GRID_SIZE = 10;

function defineGridSize() {
    let gridSize = 0;

    do {
        gridSize = parseInt(prompt("What number of squares per side do you want (max 100)?"));
    } while (gridSize > 100);

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

            cols.addEventListener("mouseover", () => {
                cols.style.backgroundColor = "red";
            });
        }
    }
}

createGridBtn.addEventListener("click", defineGridSize);

createGrid(DEFAULT_GRID_SIZE);