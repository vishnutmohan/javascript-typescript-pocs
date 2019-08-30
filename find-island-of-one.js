/**
 * 0 1 0 1 0
 * 0 0 1 1 1
 * 1 0 0 1 0
 * 0 1 1 0 0
 * 1 0 1 0 1
 */

const matrix = [
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1]
];

const createIdententyMatrix = () => {
    let arr = [];
    for (let row = 0; row < matrix.length; row++) {
        let colArr = [];
        for (col = 0; col < matrix[row].length; col++) {
            colArr.push(false);
        }
        arr.push(colArr);
    }
    return arr;
};

let visitMatrix = createIdententyMatrix();

const main = () => {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[row].length; col++) {
            if (visitMatrix[row][col] !== true && matrix[row][col] === 1) {
                count++;
                changeVisitMatrix(row, col);
            }
        }
    }
    console.log(count);
};

const changeVisitMatrix = (row, col) => {
    if (matrix[row][col] == 0 || visitMatrix[row][col]) return;
    visitMatrix[row][col] = true;
    if (col < matrix.length - 1) changeVisitMatrix(row, col + 1);
    if (row < matrix.length - 1) changeVisitMatrix(row + 1, col);
    if (col > 0) changeVisitMatrix(row, col - 1);
    if (row > 0) changeVisitMatrix(row - 1, col);
};

main();
