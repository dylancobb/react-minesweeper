import { useState } from "react";


const Cell = ({ data, setData, id, lowerCounter, setGameState }) => {
  const [x, y] = id.split("-");
  const cell = data[x][y];
  // eslint-disable-next-line react/prop-types
  const unflagged = cell.isMine ? "💣" : numberGen(cell.neighbours);
  const [content, setContent] = useState(unflagged);

  function handleLeftClick() {
    if (cell.state !== "revealed") {
      if (cell.isMine) { setGameState('gameOver') }
      cell.state = "revealed";
      setContent(unflagged);
      if (!cell.isMine) lowerCounter();
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
