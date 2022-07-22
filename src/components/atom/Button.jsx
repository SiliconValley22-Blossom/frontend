import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
padding: 1rem 2rem;
border-radius: 1rem;
border: none;
color: white;
text-align: center;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
width: 10rem;
margin: 2rem;
cursor: pointer;
font-size: 1.1rem;
font-weight: bold;
display: inline-block;
background: var(--main-pink)

`;

function Button  ({disabled,children}){
  return(
    <StyledButton disabled={disabled}>{children}
    </StyledButton>
  )
  
}

export default Button;
