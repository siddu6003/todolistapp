import React from 'react'
import trash from '../components/trash.png';

function Note(props){
    return (
        <div className='Note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <span><img src={props.image} alt="NA"></img></span>
        </div>
    )
}

export default Note;