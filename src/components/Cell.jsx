import { useState } from 'react'


function Cell (props) {
//     const [tileState, setTileState] = useState('');

// //     function update(event) {
// // if (event === leftclick) {
// // tileState = revealed
// // } else if (event === rightclick) {
// //     tileState = flagged
// // }
// //     }

    return <div className='tile {tileState}' id={props.id}>{props.data.isMine ? '💣' : numberGen(props.data.neighbours)}</div>
}

const numberGen = (num) => {
    return !num ? <p></p> : (
        <p className={'neighbours-' + num}>{num}</p>
    );
}

export default Cell