import { useEffect } from "react"
import createBoard from "../utilities/boardGen"

const Modal = ({ gameState, setGameState, setData, setRemaining }) => {

return <>
<h2>{gameState === "notOver" ? 'Start Game' : 'Game Over'}</h2>
</>
}

export default Modal;