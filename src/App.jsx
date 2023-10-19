import { useState, useEffect } from "react";
import "./App.css";
import { Win } from './components/Win';

import Board from "./components/Board";
import Modal from "./components/Modal";
import createBoard from "./utilities/boardGen";

const App = () => {
  const [gameState, setGameState] = useState("notOver");
  const rows = 8,
    cols = 8,
    mines = 10;
  const [remaining, setRemaining] = useState(rows * cols - mines);
  const [data, setData] = useState(createBoard(rows, cols, mines));
  const reset = () => {
    setData(createBoard(rows, cols, mines));
    setGameState("notOver");
    setRemaining(rows * cols - mines);
  };
  const lowerCounter = (x) => {
    setRemaining(remaining - x);
    console.log(`decreasing counter by ${x}`);
  };

  useEffect(() => {
    if (remaining === 0) {
      setGameState("win");
    }
  }, [remaining]);

  return (
    <>
      <h1>Minesweeper</h1>
      <p>{gameState === "notOver" ? "🫣" : "😵"}</p>
      <p>Remaining: {remaining}</p>
      <button onClick={reset}>Start Again</button>
      <br />
      <Board
        data={data}
        setData={setData}
        lowerCounter={lowerCounter}
        setGameState={setGameState}
      />
      {gameState === "notOver" ? (
        ""
      ) : (
        <Modal
          gameState={gameState}
          setGameState={setGameState}
          setData={setData}
          setRemaining={setRemaining}
        />
      )}
      <Win gameState={gameState} />
    </>
  );
};

export default App;
