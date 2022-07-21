import React from 'react';
import NavBar from './components/molecule/NavBar/NavBar';
import Home from './components/page/Home'
import MyPage from './components/page/MyPage'
import Login from './components/page/Login'
import SignUp from './components/page/SignUp'
import PhotoChange from './components/page/PhotoChange'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL='http://backend:5000';
axios.defaults.withCredentials = true;


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/Login" component = {Login}/>
          <Route path = "/SignUp" component = {SignUp}/>
          <Route path = "/PhotoChange" component = {PhotoChange}/>
          <Route path = "/MyPage" component = {MyPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;