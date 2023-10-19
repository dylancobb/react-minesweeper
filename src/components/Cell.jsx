import { useState } from "react";


const Cell = ({ data, setData, id, lowerCounter, setGameState }) => {
  const [row, column] = id.split("-");
  const cell = data[row][column];
  // eslint-disable-next-line react/prop-types
  const unflagged = cell.isMine ? "💣" : numberGen(cell.neighbours);
  const [content, setContent] = useState(unflagged);

  function handleLeftClick() {
    if (cell.state !== "revealed") {
      cell.state = "revealed";
      setContent(unflagged);
      if (cell.isMine) setGameState("gameOver");
      if (!cell.isMine && cell.neighbours) lowerCounter(1);
      if (!cell.neighbours) lowerCounter(revealNeighbours(row, column) + 1);
    }
  }

  function handleRightClick(event) {
    event.preventDefault(); // Prevent the context menu from appearing
    if (cell.state === "revealed") {
      state("revealed");
      setContent(unflagged);
    } else if (cell.state === "") {
      state("flagged");
      setContent("⛳️");
    } else if (cell.state === "flagged") {
      state("");
      setContent(unflagged);
    }
  }

  function state(newState) {
    cell.state = newState;
    setData(data);
  }

  function revealNeighbours(row, column) {
    let count = 0;
    for (let i = row - 1; i <= +row + 1; i++) {
      if (i < 0) i = 0; // don't fall off boundaries
      if (i === data[0].length) break; // don't fall off boundaries
      for (let j = column - 1; j <= +column + 1; j++) {
        if (j < 0) j = 0; // don't fall off boundaries
        if (j === data.length) continue; // don't fall off boundaries
        const tile = data[i][j];
        if (tile && tile.state !== "revealed") {
          tile.state = "revealed";
          count++;
          if (!tile.neighbours) count += revealNeighbours(i, j);
        }
      }
    }
    setData(data);
    return count;
  }

  return (
    <div
      className={`tile ${cell.state}`}
      id={id}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {content}
    </div>
  );
}

const numberGen = (num) => {
  return !num ? <p></p> : <p className={"neighbours-" + num}>{num}</p>;
};

export default Cell;
