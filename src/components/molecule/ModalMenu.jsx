import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import MenuList from '../../atom/MenuList';

const StyledMenu = styled.div`
    background: var(--main-pink);
    height: 90vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content:center;
    font-size: 2rem;
    font-weight : bold;
`;

function Menu(){
    return (
        <StyledMenu>
            <Link to = '/MyPage'> <StyledMenuList>My Page</StyledMenuList> </Link>
            <Link to = '/Colorize'> <StyledMenuList>Colorize</StyledMenuList> </Link>
            <Link to = '/Login'> <StyledMenuList>Login</StyledMenuList> </Link>
            <Link to = '/SignUp'> <StyledMenuList>Sign Up</StyledMenuList> </Link>
        </StyledMenu>
    )
    
}

export default Menu;
