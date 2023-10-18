import { useState } from 'react'
import './App.css'

import Board from "./components/Board"
import createBoard from "./utilities/boardGen"

const App = () => {
  const rows = 8, cols = 8, mines = 10
  const [remaining, setRemaining] = useState((rows * cols) - mines)
  const [data, setData] = useState(createBoard(rows, cols, mines))
  const [reset, setReset] = useState(0);
  const lowerCounter = () => {
    setRemaining(remaining - 1)
  }
  const newGame = () => {
    setData(createBoard(rows, cols, mines))
    setRemaining((rows * cols) - mines)
    setReset(reset + 1)
  }

  return (
    <>
      <h1>Minesweeper</h1>
      <button onClick={newGame}>Reset</button>
      <p>Remaining: {remaining}</p>
      <Board
        data={data}
        lowerCounter={lowerCounter}
        reset={reset}
      />
    </>
  )
}

export default App
