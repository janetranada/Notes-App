import React from 'react';


const Note = (props) => {
    const { note, handleDelete } = props;

    const handleClick = () => {
        handleDelete(note.id);
    }

    return (
        <div id={note.id} className='note'>
            <p>{note.title}</p>
            <p>{note.details}</p>
            <p>{note.id}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;