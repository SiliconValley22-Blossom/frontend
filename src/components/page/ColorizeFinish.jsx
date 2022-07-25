import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../atom/Button";
import NavBar from "../molecule/NavBar/NavBar_colorize";
import { Link } from "react-router-dom";

const StyledBackground = styled.div`
  background: url("../images/colorizeBG.png");
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  border-radius: 50px;
  margin: auto;
  margin-top: 5rem;
  display: flex;
`;

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid white",
        lineHeight: "0.1em",
      }}
    ></div>
  );
};

const ColorizeFinish = () => {
  const [file, setFile] = useState("");

  return (
    <StyledBackground>
      <NavBar />
      <HorizonLine />

      <StyledDropDown>
        <img src="logo192.png" style={{ margin: "auto auto auto auto" }} />
      </StyledDropDown>
      <div>
        <Button>download</Button>
        <Button>
          <Link to="/PhotoChange">other img</Link>
        </Button>
      </div>
    </StyledBackground>
  );
};

export default ColorizeFinish;
