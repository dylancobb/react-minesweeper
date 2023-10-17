// import React from 'react';
// import { useState } from 'react'
import Cell from "./Cell";


function plantMines(data, mines) {
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

function countNeighbours(data) {
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

function createEmptyArray(height, width) {
  let data = [];

  for (let i = 0; i < height; i++) {
    data.push([]);
    for (let j = 0; j < width; j++) {
      data[i][j] = {
        x: i,
        y: j,
        isMine: false,
        neighbours: 0,
        isRevealed: false,
        isEmpty: false,
        isFlagged: false,
      };
    }
  }
//   console.log(data);
  return data;
}

function renderBoard(rows, cols, mines, remaining, setRemaining) {
    const data = createEmptyArray(rows, cols);
    plantMines(data, mines);
    countNeighbours(data);
    
    console.log(data)
    
    return (
        <>
        <p>Mines: {mines}</p>
      <div className="board">
        {data.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} id={`row-${rowIndex}`} className="row" >
            {row.map((cellData, colIndex) => (
              <Cell key={`cell-${rowIndex}-${colIndex}`} id={`${rowIndex}-${colIndex}`} data={data[rowIndex][colIndex]} rows={rows} cols={cols} mines={mines} remaining={remaining} setRemaining={setRemaining}/>
            ))}
          </div>
        ))}
      </div>
      </>
    );
  }



function Board({ rows, cols, mines, remaining, setRemaining } ) {
  
  return <>
  <p>Remaining: {remaining}</p>
  {renderBoard(rows, cols, mines, remaining, setRemaining)}</>;
}

export default Board;
