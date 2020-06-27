import React from 'react';
import './styles.css';


const Note = (props) => {
    const { note, handleDelete } = props;

    const handleClick = () => {
        handleDelete(note.id);
    }

    return (
        <div id={note.id} className='note'>
            <h3>{note.title}</h3>
            <p>{note.details}</p>
            <button className='delete' onClick={handleClick}>X</button>
        </div>
    );
}

export default Note;