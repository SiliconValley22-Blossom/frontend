import React from 'react';
import styled from 'styled-components';

const StyledTextLink = styled.text`
    background-color: var(--main-white);
    border: 0;
    color: #BBBBBB;
    margin-top:1rem;
    padding: 1rem;
    font-size: rem;
    font-weight: bold;
    cursor: pointer;
`;

function TextLink  ({disabled,children}){
    return <StyledTextLink disabled={disabled}>{children}</StyledTextLink>;
}

export default TextLink;