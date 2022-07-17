import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    width: 332px;
    height: 454px;
    margin: 181px 154px 38px 296px;
    padding: 176px 123px 192px;
    border-radius: 24px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border: solid 1px #cdcdcd;
    background-color: var(--main-pink);
  `;

function display(){
    return(
        <StyledDisplay></StyledDisplay>
    )
}
export default display;
