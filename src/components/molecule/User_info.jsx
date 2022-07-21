import React from 'react';
import styled from 'styled-components';
import {User} from '@styled-icons/boxicons-regular/User';

const StyledUser = styled.div`
    width: 10rem;
    height: 10rem;
    margin: 4rem 2rem 0.5rem 15rem;
    padding: 2rem 110px 9rem 2rem;
    border-radius: 2rem;
    background-color: #ededed;
    .User{
        width: 4rem;
        height: 4rem;
        color: gray;
        margin-right: 6rem ;
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