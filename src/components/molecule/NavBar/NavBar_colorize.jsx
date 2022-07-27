import axios from 'axios';
import React from 'react';
import {Link, useHistory} from "react-router-dom";
import styled from 'styled-components';
import './NavBar_colorize.css';
import { Cookies } from 'react-cookie';

const StyledHeader = styled.nav`
    height: 3rem;
    width:100%;
    display: inline-block;
    border-style: solid none;
    border-color: transparent transparent white;
    font-size: 1.5rem;
    font-weight : bold;
`;

const NavBar = () => {
    const cookie = new Cookies();
    const history = useHistory();

    const logout = () => {
        axios.post("/api/logout").then((res) => {
            cookie.remove("access_token_cookie");
            cookie.remove("refresh_token_cookie");

            history.push("/");
        })
    } 

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
                    <Link onClick = {logout} to = '/' className='nav-links'> Logout </Link>
                </li>

            </ul>
        </StyledHeader>
        
    )
}
export default NavBar;