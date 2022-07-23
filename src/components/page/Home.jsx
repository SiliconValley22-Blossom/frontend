import React from 'react';
import '../../App.css'
import divStyle from '../../App.css'
import btnDivStyle from '../../App.css'


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
        <div className={divStyle} style={{background: 'url(../../blossom_background.png)'}}>
            <button style={btnStyle}>
                Blossom
            </button>
        </div>
    )
};

export default Home;
