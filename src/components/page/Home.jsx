import React, {useState} from 'react';
import '../../App.css'
import divStyle from '../../App.css'
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../img/color-gray.png');
    background-size: cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 1rem;
  border: none;
  color: gray;
  text-align: center;
  background: #EBEBEB;
  width: 11rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: semi-bold;
  margin-top: 35px;
  &:hover{  
    background: #F7CCCA;
    color : #D05968;
  }
  `;

function Home(){

    return (
        <StyledContainer>
            <img style={{width: '30rem'}} alt="blossomLogo" src="../logo-1.png"/>
            <Link to="/login"><Button>Start Colorizing</Button></Link>
        </StyledContainer>
        
    )
};

export default Home;
