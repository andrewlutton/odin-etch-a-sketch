const grid = document.querySelector(".grid-container");
const GRID_TOTAL_SIZE = 480; //total grid size, square, px
const DEFAULT_BACKGROUND_COLOR = "pink";
let fillMode = "black";
let gridSize = 16;
let cells;

buildGrid();
setFillMode(fillMode);

grid.setAttribute("style", `height: ${GRID_TOTAL_SIZE}px; width: ${GRID_TOTAL_SIZE}px; background-color: ${DEFAULT_BACKGROUND_COLOR}`);

const gridSlider = document.getElementById("grid-size");
gridSlider.addEventListener("mouseup", changeGridSize);

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", () => { buildGrid(); fillMode = setFillMode("black") });

const rainbowBtn = document.querySelector(".rainbow")
rainbowBtn.addEventListener("click", () => { buildGrid(); fillMode = setFillMode("rainbow") });

const eraserBtn = document.querySelector(".eraser")
eraserBtn.addEventListener("click", () => { fillMode = setFillMode("eraser") });


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
function setFillMode(mode) {
    switch (mode) {
        case "black":
            cells.forEach((cell) => {
                cell.fillColor = "black";
                cell.addEventListener("mouseover", setFillColor);
                });
            break;

        case "rainbow":
            const colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
            cells.forEach((cell) => {
                const i = Math.floor(Math.random() * colorArray.length + 1) - 1;
                cell.fillColor = colorArray[i];
                cell.addEventListener("mouseover", setFillColor);
                });
            break;

        case "eraser":
            cells.forEach((cell) => {
                cell.removeEventListener("mouseover", setFillColor);
                cell.fillColor = DEFAULT_BACKGROUND_COLOR;
                cell.addEventListener("mouseover", setFillColor);
            });
            break;
    }
    return mode;
}

function setFillColor () {
    this.setAttribute("style", `background-color: ${this.fillColor}`);
}