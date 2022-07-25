import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './NavBar_mypage.css';

const HeaderMyPage = styled.nav`
    height: 3rem;
    width:100%;
    display: inline-block;
    border-style: solid none;
    border-color: transparent transparent white;
    font-size: 2rem;
    font-weight : bold;
    `;

function NavBar(){

    return(
        <HeaderMyPage>
            <Link to ='/' className='navbar-logo-mypage'>
                Blossom
            </Link>
            
            <ul className= 'nav-menu'>

                <li className = 'nav-item'>
                    <Link to = '/Colorize' className='nav-links' > Start Colorizing </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/' className='nav-links' > Logout </Link>
                </li>
            </ul>
        </HeaderMyPage>
    )
}
export default NavBar;