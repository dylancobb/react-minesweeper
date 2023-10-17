// import { useState } from 'react'
import './App.css'

import Board from "./components/Board"
import Cell from "./components/Cell"

function App() {
  return (
    <>
      <h1>Minesweeper</h1>
      <Board rows={10} cols={10} mines={99}>
      <Cell />
      <Cell />
      <Cell />
      </Board>
    </>
  )
}

export default App
