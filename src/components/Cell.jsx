import { useState } from "react";

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

export default Cell;
