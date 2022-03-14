const grid = document.querySelector(".grid-container");
const gridTotalSize = 960; //total grid size, square, px

grid.setAttribute("style",`height: ${gridTotalSize}px; width: ${gridTotalSize}px; background-color: pink`);

const cells = gridBuilder(16);
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background-color: black");
    });
});

function gridBuilder(size) {
    const cellHeight = gridTotalSize / size;
    const cellWidth = gridTotalSize / size;

    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        // row.style.height = `${cellHeight}px`;
        grid.appendChild(row);
        for (j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            // cell.style.width = `${cellWidth}px`;
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    return cells;
}