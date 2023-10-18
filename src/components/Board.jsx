// import React from 'react';
import Cell from "./Cell";

const Board = ({ data, lowerCounter }) => {
  return (
    <>
      <div className="board">
        {data.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} id={`row-${rowIndex}`} className="row" >
            {row.map((cellData, colIndex) => (
              <Cell
                key={`cell-${rowIndex}-${colIndex}`}
                id={`${rowIndex}-${colIndex}`}
                data={data[rowIndex][colIndex]}
                lowerCounter={lowerCounter}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board