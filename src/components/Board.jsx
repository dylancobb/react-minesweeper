// import React from 'react';
import Cell from "./Cell";

const Board = ({ data, setData, lowerCounter, setGameState, gameCount }) => {
  return (
    <>
      <div className="board">
        {data.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} id={`row-${rowIndex}`} className="row" >
            {row.map((cellData, colIndex) => (
              <Cell
                key={`cell-${rowIndex}-${colIndex}-${gameCount}`}
                id={`${rowIndex}-${colIndex}`}
                data={data}
                setData={setData}
                lowerCounter={lowerCounter}
                setGameState={setGameState}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board