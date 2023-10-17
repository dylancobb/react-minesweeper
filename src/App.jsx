import { useState } from 'react'
import './App.css'

import Board from "./components/Board"

function App() {
  const rows = 10, cols = 10, mines = 10;


const [remaining, setRemaining] = useState((rows*cols)-mines)

  

  return (
    <>
      <h1>Minesweeper</h1>
      <Board rows={rows} cols={cols} mines={mines} remaining={remaining} setRemaining={setRemaining}/>
    </>
  )
}

export default App
