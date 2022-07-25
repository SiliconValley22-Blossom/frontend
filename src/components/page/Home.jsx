import React from 'react';
import '../../App.css'
import divStyle from '../../App.css'
import btnDivStyle from '../../App.css'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";


function Home(){
    
    const btnStyle = {
        color: "white",
        background: "#EBEBEB",
        padding: ".5rem .8rem",
        border: "0px solid teal",
        borderRadius: "1rem",
        fontSize: "1.2rem",
        width:"12rem",
        color:"gray",
        fontWeight:"bold"
      };

    return (
        <div className={divStyle} style={{background: 'url(../../../public/blossom_background.png)'}}>
            <Router>
                <Link to="/login">
                    <button style={btnStyle}>Blossom</button>
                </Link>
                <main>
                    <Route path="/login" component={Login}/>
                </main>
            </Router>
        </div>
    )
};

export default Home;
