import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const ColorizeButton = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  border: none;
  color: gray;
  text-align: center;
  background: var(--gray);
  width: 11rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: semi-bold;
  margin-top: 35px;
    &:hover{  
      background: var(--main-pink);
      color : var(--sub-purple);
    }
  `;

  function HomeWrapper(){

    return (
        <>
            <img style={{width: '30rem'}} alt="blossomLogo" src="../PurpleLogo-BOutline.png"/>
            <Link to="/Login"><ColorizeButton>Start Colorizing</ColorizeButton></Link>
        </>
        
    )
};

export default HomeWrapper;
