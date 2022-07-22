import React from 'react';
import styled from 'styled-components';
import {User} from '@styled-icons/boxicons-regular/User';

const StyledUser = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 4.5rem 1rem 0.5rem 4rem;
    padding: 2rem 110px 9rem 2rem;
    border-radius: 2rem;
    background-color: var(--grey);
    
    .User{
        width: 4rem;
        height: 4rem;
        color: gray;
    }
`;

function User_info(){
    return(
        <StyledUser>
            <User className='User'></User>
        </StyledUser>
    )
}

export default User_info;