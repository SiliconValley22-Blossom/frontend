import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/bootstrap/Github';

const StyledFooter = styled.div`
    background: var(--grey);
    height: 30vh;
    flex-direction: column;
    flex : 1;
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    margin-top: 10rem;
    font-size: 1.5rem;
    color: var(--dark-grey);
    

    .github{
        height: 2rem;
        width: 2rem;
    }
    .team{
        font-weight: bold;
        padding-left:
    }
`;

const StyledTeammates = styled.div`
    display: flex;
    column-gap: 1rem;
`

//임시
function Footer(){
    return (
        <StyledFooter>
            <div className='team'>Our Team</div>
            <p><StyledTeammates>
            <p onClick = {() => window.open('https://github.com/phjppo0918','_blank')}><Github className='github'></Github> Hyunjun Park </p>
            <p onClick = {() => window.open('https://github.com/yjshin229','_blank')}><Github className='github'></Github> Youngjin Shin </p>
            <p onClick = {() => window.open('https://github.com/asyooniverse','_blank')}><Github className='github'></Github> Jiyoon Kim </p>
            </StyledTeammates>
            </p>
            <StyledTeammates>
            <p onClick = {() => window.open('https://github.com/hamin924','_blank')}><Github className='github'></Github> Hamin Kim </p>
            <p onClick = {() => window.open('https://github.com/SEONMl','_blank')}><Github className='github'></Github> Sunmi Park </p>
            </StyledTeammates>
        </StyledFooter>
    )
}

export default Footer;