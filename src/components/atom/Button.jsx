import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: none;
  color: gray;
  text-align: center;
  background: white;
  width: 8rem;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: bold;
`;

function Button  ({disabled,children}){
  return(
    <StyledButton disabled={disabled}>{children}
    </StyledButton>
  )
  
}

export default Button;
