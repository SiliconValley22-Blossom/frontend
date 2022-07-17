import ModalSignUp from './components/organisms/Modal-signup';
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';

//this shows the modal-signup page
//needs routing 
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ModalSignUp/>
    </div>
  );
}

export default App;