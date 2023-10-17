function Cell (props) {
    console.log(props.data)
    return <div className='tile' id={props.id}>{props.data.isMine ? 'true' : 'false'}</div>
}

export default Cell