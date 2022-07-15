import React from 'react';
import styled from 'styled-components';

const StyledTextLink = styled.button`
    background-color: var(--main-bg-color);
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