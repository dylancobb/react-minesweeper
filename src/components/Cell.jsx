import { useState, useEffect } from "react";

const Cell = ({ data, id, lowerCounter }) => {
  const [tileState, setTileState] = useState("");
  // eslint-disable-next-line react/prop-types
  const unflagged = data.isMine ? "💣" : numberGen(data.neighbours);
  const [content, setContent] = useState(unflagged);

  function handleLeftClick() {
    if (tileState !== "revealed") {
      setTileState("revealed");
      setContent(unflagged);
      if (!data.isMine) lowerCounter();
      !data.neighbours && clickNeighbours(id);
    }

  }

  function handleRightClick(event) {
    event.preventDefault(); // Prevent the context menu from appearing
    if (tileState === "revealed") {
      setTileState("revealed");
      setContent(unflagged);
    } else if (tileState === "") {
      setTileState("flagged");
      setContent("⛳️");
    } else if (tileState === "flagged") {
      setTileState("");
      setContent(unflagged);
    }
  }

  return (
    <div
      className={`tile ${tileState}`}
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

const clickNeighbours = (id) => {
  const [x, y] = id.split('-');
  console.log(x, y);

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      const cell = document.getElementById(`${i}-${j}`);
      cell && cell.click();
    }
  }
}

export default Cell;
