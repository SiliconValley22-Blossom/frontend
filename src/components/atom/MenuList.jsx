import React from 'react';
import styled from 'styled-components';

const StyledMenuList = styled.button`
padding: 1rem 2rem;
border: none;
color: white;
text-align: center;
width: 100%;
cursor: pointer;
font-size: 2rem;
font-weight: bold;
background: var(--main-pink)

`;

function MenuList  ({disabled,children}){
    return(
      <StyledMenuList disabled={disabled}>{children}
      </StyledMenuList>
    )
  }
  
  export default MenuList;