import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);    
  }

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <div className="App">
      <Header />
      <CreateNote handleAdd={addNote} />
    </div>
  );
}

export default App;
