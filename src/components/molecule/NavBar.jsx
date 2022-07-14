import Hamburger from "../atom/Hamburger";
import React from 'react';

function NavBar(){
    return(
        <div className = "NavBar">
            <div className = "pink-nav">
                <div>Blossom</div>
                <Hamburger></Hamburger>
            </div>
        </div>
    )
}

export default NavBar;