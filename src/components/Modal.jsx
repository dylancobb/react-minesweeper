import { useEffect } from "react"
import createBoard from "../utilities/boardGen"
// import { setTileStateValue, setContentValue } from "./Cell"; // Import your functions from the relevant file

const Modal = ({ gameState, setGameState, setData, setRemaining }) => {

    // function newGame() {
        
    //     setGameState("notOver")
    //     setRemaining('54')

    //     const tiles = document.getElementsByClassName('tile');
    //     for (const tile of tiles) {
    //       tile.className = 'tile';
    //     }
        
    //     setData(createBoard(8, 8, 8))
    // }

return <>
<h2>{gameState === "notOver" ? 'Start Game' : 'Game Over'}</h2>
{/* <button onClick={() => newGame()}>Reset</button> */}
</>
}

export default Modal;