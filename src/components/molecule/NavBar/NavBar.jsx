import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import './NavBar.css';
import Button from '../../atom/Button';
import SignUp from '../../page/SignUp';

const StyledHeader = styled.nav`
    background: var(--main-pink);
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 2rem;
    font-weight : bold;
`

function NavBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    //hamburger logo 모양 바뀜
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const onMouseEnter = () => {
        if (window.innerWidth < 1200){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 1200){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return(
        <StyledHeader>
            <Link to ='/' className='navbar-logo'>
                Blossom
                <i class = 'fas fa-trillium'/>
            </Link>
            
            <div className = "menu-icon" onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times': 'fas fa-bars'}/> 
            </div>

            <ul className= {click? 'nav-menu-active' : 'nav-menu'}>
                <li className = 'nav-item'>
                    <Link to = '/MyPage' className='nav-links' onClick= {closeMobileMenu}> My Page </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/PhotoChange' className='nav-links' onClick= {closeMobileMenu}> Colorize </Link>
                </li>

                <li className = 'nav-item'>
                        <Link to = '/Login' className='nav-links' onClick= {closeMobileMenu}> Login </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/SignUp' className='nav-links' onClick= {closeMobileMenu}> SignUp </Link>
                </li>
            </ul>
        </StyledHeader>
    )
}
export default NavBar;