export class Cell {
    constructor(gridElement, x, y) {
        const cell = document.createElement("div");
        cell.classlist.add("gridCell");
        gridElement.append(cell)
        this.x = x;
        this.y = y;
    }
}