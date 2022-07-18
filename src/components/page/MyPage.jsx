import Modal from './components/Modal';
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';


function MyPage(){
    return(
            <div className="App">
                <NavBar></NavBar>
                <Modal/>
            </div>
    )
}

export default MyPage;