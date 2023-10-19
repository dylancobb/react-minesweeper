import { useState } from 'react'
import './App.css'

import Board from "./components/Board"
import Modal from "./components/Modal"
import createBoard from "./utilities/boardGen"

const App = () => {
  const [gameState, setGameState] = useState("notOver")
  const rows = 8, cols = 8, mines = 10
  const [remaining, setRemaining] = useState((rows * cols) - mines)
  const [data, setData] = useState(createBoard(rows, cols, mines))
  const [reset, setReset] = useState(0);
  const lowerCounter = () => setRemaining(remaining - 1)

  return (
    <>
      <h1>Minesweeper</h1>
      <p>{gameState === "notOver" ? '🫣' : '😵'}</p>
      <p>Remaining: {remaining}</p>
      <Board
        data={data}
        setData={setData}
        lowerCounter={lowerCounter}
        setGameState={setGameState}
      />
      {gameState === "notOver" ? '' :
        <Modal
          gameState={gameState}
          setGameState={setGameState}
          setData={setData}
          setRemaining={setRemaining}
        />}
    </>
  )
}

export default App
