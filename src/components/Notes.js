import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Notes = () => {
   
    const [notesList, setNotesList] = useState([])
    const [newNote, setNewNote] = useState({})
    const [noteText, setNoteText] = useState('')

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/todos/")
        .then(res => setNotesList(res.data ))
        .catch(err => console.log(err));
    },[])

    const handleNoteText = e => {
        e.preventDefault()
        setNoteText(e.target.value)
    }
    
    const addToDo = () => {
        // let newNoteObject = {text: noteText}
        // [...toDos, currentToDo]
        // setToDos(newToDos)
        // localStorage.setItem('toDos', JSON.stringify(newToDos))
        // setCurrentToDo('')
    }

    // const deleteToDo = e => {
    //     let newToDos = [...toDos]
    //     newToDos.splice(parseInt(e.target.value), 1)
    //     setToDos(newToDos)
    //     localStorage.setItem('toDos', JSON.stringify(newToDos))
    // }

    return (
        <div>
            {!!notesList?.length && notesList.map((text, i) => {
                    return (
                    <div key={i} 
                        className="toDo"
                    >
                        {text}
                        <button 
                            value={i}
                            // onClick={e => deleteToDo(e)}
                            >
                        Delete
                        </button>
                    </div>
                    )
                }
            )}
            <h3>Notes</h3>
            <textarea 
                value={noteText} 
                COLS="36" 
                ROWS="5" 
                WRAP="HARD"
                // onChange={e => handleToDo(e)} 
                />
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

export default Notes;