// import { useState } from 'react'
import './App.css'

import Board from "./components/Board"
import Cell from "./components/Cell"

function App() {
  return (
    <>
      <h1>Minesweeper</h1>
      <Board rows={9} cols={9} mines={10}>
      <Cell />
      <Cell />
      <Cell />
      </Board>
    </>
  )
}

export default App
