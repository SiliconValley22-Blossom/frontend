import React from 'react';
import styled from 'styled-components';
import {ThMenuOutline} from '@styled-icons/typicons/ThMenuOutline';




const StyledHeader = styled.div`
    display: flex;
    background: var(--main-pink);
    width: 1;
    flex-direction: row;
    flex : 1;
    color: white;
    padding: 1rem;
    font-weight: 600;
    font-size: 2rem;
    justify-content: space-between;

    .hamburger{
        width: 2rem;
        height: 2rem;
    }
`;

function NavBar(){
    return(
        <StyledHeader>
            <div>Blossom</div>
            <ThMenuOutline className='hamburger'></ThMenuOutline>
        </StyledHeader>
    )
}
export default NavBar;