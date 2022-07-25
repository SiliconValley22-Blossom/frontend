import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './NavBar_colorize.css';

const StyledHeader = styled.nav`
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
        <StyledHeader>
            <Link to ='/' className='navbar-logo'>
                Blossom
            </Link>
          
            <ul className = 'nav-menu'>

                <li className = 'nav-item'>
                    <Link to = '/MyPage' className='nav-links'> My page </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/' className='nav-links'> Logout </Link>
                </li>

            </ul>
        </StyledHeader>
    )
}
export default NavBar;