import React from 'react';
import styled from 'styled-components';

const StyledTextLink = styled.text`
    background-color: #d8d1e1;
    border: 0;
    color: white;
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
`;

function TextLink  ({disabled,children}){
    return <StyledTextLink disabled={disabled}>{children}</StyledTextLink>;
}

export default TextLink;