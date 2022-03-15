const grid = document.querySelector(".grid-container");
const GRID_TOTAL_SIZE = 480; //total grid size, square, px
const DEFAULT_BACKGROUND_COLOR = "pink";
let cellFill = "black";
let gridSize = 16;
let cells;

buildGrid();
setCellFill(cellFill);

grid.setAttribute("style", `height: ${GRID_TOTAL_SIZE}px; width: ${GRID_TOTAL_SIZE}px; background-color: ${DEFAULT_BACKGROUND_COLOR}`);

const gridSlider = document.getElementById("grid-size");
gridSlider.addEventListener("mouseup", changeGridSize);

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => {buildGrid(); setCellFill(cellFill)});

function buildGrid() {

    // destroy current grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };

    // build new grid
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
    cells = document.querySelectorAll(".cell");
}

function changeGridSize() {
    gridSize = this.value;
    buildGrid(this.value);
    setCellFill(cellFill);
}

// pass string to set cell filling mode
function setCellFill (mode) {
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.setAttribute("style", `background-color: ${mode}`);
        });
    });
}