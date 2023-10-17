import { useState } from "react";

function Cell(props) {
  const [tileState, setTileState] = useState("");
  // eslint-disable-next-line react/prop-types
  const unflagged = props.data.isMine ? "💣" : numberGen(props.data.neighbours);
  const [content, setContent] = useState(unflagged);

  // let left = (props.rows*props.cols)-props.mines
  let left = 80

  function handleLeftClick() {
    
    setTileState("revealed");
    setContent(unflagged);
    props.setRemaining(left)
    console.log(left)
    console.log(props.rows)
    left = left-1
  }
  
  function handleRightClick(event) {
    event.preventDefault(); // Prevent the context menu from appearing
    if (tileState === "revealed") {
      setTileState("revealed");
      setContent(unflagged);
    } else if (tileState === ""){
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
      id={props.id}
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
