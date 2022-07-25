import React, { useState } from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';
import signUp from './SignUpWrapper'
import { useHistory, Link, Route, BrowserRouter as Router } from "react-router-dom";

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../img/color-gray.png');
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledLogin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  width: 18rem;
  height: 14.5rem;
`;

  
function LoginWrapper(){

  const btnStyle = {
    color: "#BBBBBB",
    background: "white",
    border: "None",
    fontSize: "0.95rem",
    cursor:"pointer",
    textDecoration:"underline"
    
  };

  const [inputs, setInputs] = useState({
    email : '',
    password:''
  })
   
  const history=useHistory();
  
  const postLogin = (ev) => {
    if(inputs===""){
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return ;
    }
    ev.preventDefault();
    const data = JSON.stringify(
      {
        "email":inputs['email'],
        "password": inputs['password']
      });

    console.log(data);
    axios({
        url: "/api/login",
        method: "post",
        data: {data}
      }).then((response) => {
        if(response.status==403){
          window.alert("로그인 실패");
          return ;
        }
        return history.push("/Colorize");
      });
    }

    return(
      <StyledContainer>
        <StyledLogin>
        <form onSubmit={postLogin}>
        <Input name="Email" type="text" onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
        <Input name="Password" type="password" onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>

        <Button>Sign In</Button>
        </form>
        <Router>
            <Link to="/signUp">
                <button style={btnStyle}>Are you not a member ?</button>
            </Link>
            <main>
                <Route path="/signUp" component={signUp}/>
            </main>
            </Router>
        </StyledLogin>
      </StyledContainer>
    )
  }

export default LoginWrapper;