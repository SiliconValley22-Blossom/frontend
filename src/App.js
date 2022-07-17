import Modal from './components/organisms/Modal-signup';
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';

//this shows the modal-signup page
//needs routing 
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Modal/>
    </div>
  );
}

export default App;