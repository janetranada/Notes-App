import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';
import NotesContainer from './components/NotesContainer/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    const date = new Date();
    const dateString = date.toISOString().replace(/[^a-zA-Z0-9]/g, '');
    newNote.id = dateString;
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <div className="App">
      <Header />
      <CreateNote handleAdd={addNote} />
      <NotesContainer 
        allNotes={notes} 
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
