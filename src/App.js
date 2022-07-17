import Modal from './organisms/Modal';
import NavBar from './molecule/NavBar';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Modal/>
    </div>
  );
}

export default App;