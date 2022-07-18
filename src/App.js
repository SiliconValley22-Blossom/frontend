import React from 'react';
import NavBar from './components/molecule/NavBar/NavBar';
import Home from './components/page/Home'
import MyPage from './components/page/MyPage'
import Login from './components/page/Login'
import SignUp from './components/page/SignUp'
import PhotoChange from './components/page/PhotoChange'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;