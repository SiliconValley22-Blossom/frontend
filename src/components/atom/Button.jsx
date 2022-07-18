import React, { useState } from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: none;
  color: white;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  width: 150px;
  margin: 1rem 2px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  background: var(--main-color)
  
  }
`;

function Button  ({disabled,children}){
  return(
    <StyledButton disabled={disabled}>{children}
    </StyledButton>
  )
  
}

export default Button;
