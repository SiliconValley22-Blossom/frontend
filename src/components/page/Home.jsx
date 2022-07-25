import React, {useState} from 'react';
import '../../App.css'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import HomeWrapper from '../organisms/HomeWrapper';


function Home(){

    return (
      <div className='home'>
        <HomeWrapper></HomeWrapper>
      </div>
    )
};

export default Home;
