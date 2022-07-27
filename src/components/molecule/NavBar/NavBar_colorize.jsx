import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './NavBar_colorize.css';

const StyledHeader = styled.nav`
    height: 3rem;
    width:100%;
    display: inline-block;
    border-style: solid none;
    border-color: transparent transparent white;
    font-size: 1.5rem;
    font-weight : bold;
`;

function NavBar(){
    return(
        <StyledHeader>
            <Link to ='/' className='navbar-logo'>
            <img style={{width: '11rem'}} alt="blossomLogo" src="../../../../logo-4.png"/>
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