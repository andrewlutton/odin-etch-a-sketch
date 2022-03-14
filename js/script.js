const grid = document.querySelector(".grid-container");
const GRID_TOTAL_SIZE = 480; //total grid size, square, px
const DEFAULT_BACKGROUND_COLOR = "pink";

grid.setAttribute("style", `height: ${GRID_TOTAL_SIZE}px; width: ${GRID_TOTAL_SIZE}px; background-color: ${DEFAULT_BACKGROUND_COLOR}`);

const cells = gridBuilder(16);
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color: black");
    });
});

const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener("click", resetGrid);

function gridBuilder(size) {

    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    return cells;
}

function resetGrid() {
    cells.forEach((cell) => {
        cell.setAttribute("style", `background-color: ${DEFAULT_BACKGROUND_COLOR}`)
    });
}