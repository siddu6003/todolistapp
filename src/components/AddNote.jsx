import React,{useState} from 'react'
import '../components/styles.css'
import notes from './notes';
import Note from './Note';
import trash from '../components/trash.png';


function AddNote(){

    const [list,newlist]=useState([]);

    function addNotes(){
        list.push({
            key: list.length+1,
            title : "Note "+(list.length+1),
            body: document.getElementById('content').value,
            image: trash
        })
        console.log(list);
        newlist([...list],list);
    }

    function createNote(note){
        return (<Note key={note.key} title={note.title} content={note.body} image={note.image}/>)
      }

    return (
        <div className='addNote'>
            <input id="content" type='text' placeholder="Add a note..."/>
            <button className='add' onClick={addNotes}>Add</button>
            <br></br>
                {list.map(createNote)}
        </div>
    )
}

export default AddNote;