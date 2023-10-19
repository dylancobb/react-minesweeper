import { useState, useEffect } from "react";
import "./App.css";
import { Win } from './components/Win';

import Board from "./components/Board";
import Modal from "./components/Modal";
import createBoard from "./utilities/boardGen";

const App = () => {

  const [gameState, setGameState] = useState("notOver")
  let rows = 8, cols = 8, mines = 10
  const [remaining, setRemaining] = useState((rows * cols) - mines)
  const [data, setData] = useState(createBoard(rows, cols, mines))
  const [gameCount, setGameCount] = useState(0);
  const reset = () => {
    setData(createBoard(rows, cols, mines));
    setGameState("notOver");
    setRemaining((rows * cols) - mines)
    setGameCount(gameCount + 1);
  }
  const mode = (difficulty) => {
    switch (difficulty) {
      case 1:
        rows = 8, cols = 8, mines = 10;
        reset();
        break;
      case 2:
        rows = 15, cols = 15, mines = 40;
        reset();
        break;
      case 3:
        rows = 25, cols = 25, mines = 100;
        reset();
        break;
    }
  }
  const lowerCounter = (x) => {
    setRemaining(remaining - x);
    console.log(`decreasing counter by ${x}`);
  };

  useEffect(() => {
    if (remaining === 0 && gameState !== "gameOver") {
      setGameState("win");
    }
  }, [remaining]);

  return (
    <>
      <h1>Minesweeper</h1>
      <p id='emoji'>
  {gameState === "gameOver" && "😵"}
  {gameState === "win" && "🤓"}
  {gameState === "notOver" && "🫣"}
</p>
      <p>Remaining: {remaining}</p>

      <button id='reset' onClick={reset}>Start Again</button><br />
      <button onClick={() => mode(1)}>Easy</button>
      <button onClick={() => mode(2)}>Medium</button>
      <button onClick={() => mode(3)}>Hard</button><br />

      <Board
        data={data}
        setData={setData}
        lowerCounter={lowerCounter}
        setGameState={setGameState}
        gameCount={gameCount}
      />
      {gameState === "gameOver" ?(
        <Modal
          gameState={gameState}
          setGameState={setGameState}
          setData={setData}
          setRemaining={setRemaining}
        />
      ): ("")}
      {gameState !== "win" ? (
        ""
      ) : (
        <h2>Win!</h2>
      )}
      <Win gameState={gameState} />
    </>
  );
};

export default App;
