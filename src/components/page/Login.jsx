import ModalLogin from './components/Modal-login';
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';


function Login(){
    return(
            <div className="App">
                <NavBar></NavBar>
                <ModalLogin/>
            </div>
    )
}

export default Login;