import { useState } from "react";
import "./App.css";

import Board from "./components/Board";

function App() {
  const rows = 10,
    cols = 10,
    mines = 10;
  const [game, setGame] = useState(false);
  const [remaining, setRemaining] = useState(rows * cols - mines);

  return (
    <>
      <h1>Minesweeper</h1>
      <p>{remaining}</p>
      <Board
        rows={rows}
        cols={cols}
        mines={mines}
        game={game}
        setGame={setGame}
        remaining={remaining}
        setRemaining={setRemaining}
      />
    </>
  );
}

export default App;
