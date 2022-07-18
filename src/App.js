import Modal from './components/organisms/Modal-mypage'
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//this shows the modal-signup page
//needs routing 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Modal/>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;