import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    width: 12rem;
    height: 15rem;
    margin: 4rem auto;
    padding: 200px 123px 192px;
    border-radius: 2rem;
    box-shadow: 0 4px 4px 0rgba(0,0,0,0.25);
    border: solid 1px #cdcdcd;
    background-color: var(--main-pink);
  `;


function display(){
    return(
        <StyledDisplay></StyledDisplay>
    )
}
export default display;
