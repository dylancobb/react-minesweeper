// import React from 'react';
import Cell from "./Cell";

function plantMines(data) {
  let mineArray = [];

  while (mineArray.length < 10) {
    const x = Math.floor(Math.random() * data[0].length);
    const y = Math.floor(Math.random() * data.length);

    const newMine = `${x},${y}`;

    if (!mineArray.includes(newMine)) {
      mineArray.push(newMine);
      data[x][y].isMine = true;
    }
  }

  for (const col of data) {
    for (const cell of col) {
      console.log(cell.isMine);
    }
  }
  console.log(data)
  
}

// plantMines(createEmptyArray(9,9))

// function plantMines (rows,cols) {
//     let mineArray = []

//  while (mineArray.length < 10) {
//     const x = Math.floor(Math.random()*rows);
//     const y = Math.floor(Math.random()*cols);

//     const newMine = `${x},${y}`;

//     if (!mineArray.includes(newMine)) {
//         mineArray.push(newMine)
//     }
//  }
// }

function createEmptyArray(height, width) {
  let data = [];

  for (let i = 0; i < height; i++) {
    data.push([]);
    for (let j = 0; j < width; j++) {
      data[i][j] = {
        x: i,
        y: j,
        isMine: false,
        neighbour: 0,
        isRevealed: false,
        isEmpty: false,
        isFlagged: false,
      };
    }
  }
//   console.log(data);
  return data;
}

// function renderBoard(rows, cols) {
//   const emptyArray = createEmptyArray(rows, cols);

//   return (
//     <div className="board">
//       {emptyArray.map((row, rowIndex) => (
//         <div key={`row-${rowIndex}`} className="row">
//           {row.map((cellData, colIndex) => (
//             <Cell key={`cell-${rowIndex}-${colIndex}`} data={cellData} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

function renderBoard(rows, cols) {
    const data = createEmptyArray(rows, cols);
    plantMines(data);
  
    return (
      <div className="board">
        {data.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} id={`row-${rowIndex}`} className="row" >
            {row.map((cellData, colIndex) => (
              <Cell key={`cell-${rowIndex}-${colIndex}`} id={`row-${rowIndex} col-${colIndex}`} data={cellData} />
            ))}
          </div>
        ))}
      </div>
    );
  }



function Board({ rows, cols, mines }) {
  return <>{renderBoard(rows, cols)}</>;
}

export default Board;
