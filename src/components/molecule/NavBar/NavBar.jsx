import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ThMenuOutline} from '@styled-icons/typicons/ThMenuOutline';
import {TimesOutline} from '@styled-icons/typicons/TimesOutline';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledHeader = styled.div`
    background: var(--main-pink);
    height: 6rem;
    display: flex;
    
    align-items: center;
    font-size: 1.5rem;
    font-weight : bold;
`;

const Hamburger = styled(ThMenuOutline)`
    color: white;
    height; 2rem;
    width: 2rem;
`;

const HamburgerClicked = styled(TimesOutline)`
    color: white;
    height; 2rem;
    width: 2rem;
`;


function NavBar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return(
        <StyledHeader>
            <Link to ='/' className='navbar-logo' onClick = {closeMobileMenu}>
                Blossom
                <FontAwesomeIcon icon className = 'fas fa-trillium'/>
            </Link>
            
            {/* 화면 작아지면 메뉴바 보이게 하는 것 구현해야함 */}
            <div className = "menubar" onClick = {handleClick}>
                    <styled-icon className = {click ? 'HamburgerClicked': 'Hamburger'}/> 
            </div>

            <ul className= {click? 'nav-menu-active' : 'nav-menu'}>

                <li
                    className = 'nav-item'
                    onMouseEnter = {onMouseEnter}
                    onMouseLeave = {onMouseLeave}>
                        <Link to = '/Login' className='nav-links' onClick= {closeMobileMenu}> 로그인 </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/MyPage' className='nav-links' onClick= {closeMobileMenu}> 마이페이지 </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/PhotoChange' className='nav-links' onClick= {closeMobileMenu}> 컬러복원페이지 </Link>
                </li>

                <li className = 'nav-item'>
                    <Link to = '/SignUp' className='nav-links' onClick= {closeMobileMenu}> 회원가입 </Link>
                </li>
            </ul>
        </StyledHeader>
    )
}
export default NavBar;