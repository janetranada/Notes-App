import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
    </div>
  );
}

export default App;
