import React from "react";
import Home from "./components/page/Home";
import MyPage from "./components/page/MyPage";
import Login from "./components/page/Login";
import SignUp from "./components/page/SignUp";
import Colorize from "./components/page/Colorize";
import ColorizeFinish from "./components/page/ColorizeFinish";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Colorize" component={Colorize} />
          <Route path="/MyPage" component={MyPage} />
          <Route path="/ColorizeFinish/:id" component={ColorizeFinish} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
