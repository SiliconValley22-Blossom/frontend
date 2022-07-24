import React from 'react';
import Home from './components/page/Home';
import MyPage from './components/page/MyPage';
import Login from './components/page/Login';
import SignUp from './components/page/SignUp';
import Colorize from './components/page/Colorize';
import Footer from './components/molecule/Footer'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:5000';
axios.defaults.withCredentials = true;



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/Login" component = {Login}/>
          <Route path = "/SignUp" component = {SignUp}/>
          <Route path = "/Colorize" component = {Colorize}/>
          <Route path = "/MyPage" component = {MyPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;