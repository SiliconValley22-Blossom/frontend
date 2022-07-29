import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './NavBar_mypage.css';
import { useHistory } from "react-router-dom";
import { Cookies } from 'react-cookie';
import {PersonFill} from '@styled-icons/bootstrap/PersonFill';


const HeaderMyPage = styled.nav`
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
        <HeaderMyPage>
            <Link to ='/' className='navbar-logo-mypage'>
            <img style={{width: '11rem'}} alt="blossomLogo" src="../../../../logo-4.png"/>
            </Link>
            
            <ul className= 'nav-menu-mypage'>

                <li className = 'nav-item-mypage'>
                    <Link to = '/Colorize' className='nav-links-mypage'> Start Colorizing </Link>
                </li>

                <li className = 'nav-item-mypage'>
                    <Link to = '/' className='nav-links-mypage' onClick={logout}> Logout </Link>
                </li>

                <li className = 'nav-item-mypage'>
                <Link to = '/MyProfile' className='nav-person'> <PersonFill/> </Link>
                </li>

            </ul>
        </HeaderMyPage>
    )
}
export default NavBar;