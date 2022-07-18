import React from 'react';
import styled from 'styled-components';
import {ThMenuOutline} from '@styled-icons/typicons/ThMenuOutline';




const StyledHeader = styled.div`
    display: flex;
    background: var(--main-color);
    width: 1;
    flex-direction: row;
    flex : 1;
    color: white;
    padding: 1rem;
    font-weight: 600;
    font-size: 2rem;
    justify-content: space-between;
    .ham{
        width: 2rem;
        height: 2rem;
    }
`;

function NavBar(){
    return(
        <StyledHeader>
            <div>Blossom</div>
            <ThMenuOutline className='ham'></ThMenuOutline>
        </StyledHeader>
    )
}
export default NavBar;