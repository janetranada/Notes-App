import React from 'react';
import Note from '../Note/Note';
import './styles.css';

const NotesContainer = (props) => {
    const { allNotes, deleteNote } = props;

    return (
        <section id="all-notes">
            {allNotes.map((note) => {
                return (
                    <Note 
                        note={note}
                        key={note.id}
                        handleDelete={deleteNote}
                    />
                )
            })}
        </section>
    );
}

export default NotesContainer;