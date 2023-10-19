const createBoard = (rows, cols, mines) => {
    const data = createEmptyArray(rows, cols);
    plantMines(data, mines);
    countNeighbours(data);

    return data;
}

const createEmptyArray = (rows, cols) => {
    let data = [];

    for (let i = 0; i < rows; i++) {
        data.push([]);
        for (let j = 0; j < cols; j++) {
            data[i][j] = {
                x: i,
                y: j,
                isMine: false,
                neighbours: 0,
                state: "",
            };
        }
    }
    //   console.log(data);
    return data;
}

const plantMines = (data, mines) => {
    let mineArray = [];

    while (mineArray.length < mines) {
        const x = Math.floor(Math.random() * data.length);
        const y = Math.floor(Math.random() * data[0].length);

        const newMine = `${x},${y}`;

        if (!mineArray.includes(newMine)) {
            mineArray.push(newMine);
            data[x][y].isMine = true;
        }
    }
}

const countNeighbours = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (data[x] && data[x][y] && data[x][y].isMine) {
                        data[i][j].neighbours++;
                    }
                }
            }
        }
    }
}

export default createBoard