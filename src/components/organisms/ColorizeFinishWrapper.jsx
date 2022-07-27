import React, { useState} from "react";
import styled from "styled-components";
import Button from "../atom/Button";
import NavBar from "../molecule/NavBar/NavBar_colorize";
import { Link } from "react-router-dom";

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  border-radius: 50px;
  margin: 3rem auto 1.5rem;
  display: flex;
`;

const ColFinButton = styled.button`
  padding: 0.8rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: var(--sub-purple);
  color: var(--sub-purple);
  text-align: center;
  background: var(--main-pink);
  width: 11rem;
  margin: 1rem 1rem 0rem 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    color: white;
    background-color: transparent;
    border-style: solid;
    border-color: white;
    transition : all 0.2s ease-out;
  }
`;



function ColorizeFinishWrapper() {
  const [file, setFile] = useState("");

  return (
    <>
      <NavBar />

      <StyledDropDown>
        <img style={{width: '5rem' ,height:'5rem', margin: 'auto auto'}} src= "img/FlowerLogo.png"/>
      </StyledDropDown>
      <ColFinButton>Download</ColFinButton>
      <Link to="/Colorize">
      <ColFinButton>
       Go Colorize!
     </ColFinButton>
     </Link>
    </>
  );
};

export default ColorizeFinishWrapper;
