import { useState } from 'react'
import './App.css'

import Board from "./components/Board"
import createBoard from "./utilities/boardGen"

const App = () => {
  const rows = 10, cols = 10, mines = 10
  const [remaining, setRemaining] = useState((rows * cols) - mines)
  const [data, setData] = useState(createBoard(rows, cols, mines))
  const lowerCounter = () => {
    setRemaining(remaining - 1)
  }

  return (
    <>
      <h1>Minesweeper</h1>
      <p>{remaining}</p>
      <Board data={data} lowerCounter={lowerCounter} />
    </>
  )
}

export default App
