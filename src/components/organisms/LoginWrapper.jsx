import React, { useEffect,useState } from 'react';
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, Link} from "react-router-dom";
import {Cookies} from "react-cookie";

const StyledLogin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  width: 18rem;
  height: 14.5rem;
  
`;


const SignInButton = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: var(--sub-grey);
  color: gray;
  text-align: center;
  background: white;
  width: 8rem;
  margin: 1.5rem 0rem 1rem 0rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: var(--main-purple);
    border-style: solid;
    border-color:var(--main-pink);
    transition : all 0.2s ease-out;
  }
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

  const cookie = new Cookies();
  
  useEffect(() => {
    if(cookie.get('access_token_cookie') != null) {
      history.push("/Colorize");
  }});  

  const postLogin = (ev) => {
    if(inputs['email']===""){
      window.alert("이메일을 입력해주세요.");
      return ;
    }
    else if(inputs['password']===""){
      window.alert("비밀번호를 입력해주세요.")
      return ;
    }
    console.log(inputs)
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
        data: {
          "email":inputs['email'],
          "password": inputs['password']
        }
      }).then((response) => {
        if(response.status===403){
          window.alert("로그인 실패");
          return ;
        }
        return history.push("/Colorize");
      });
    }

    return(
      <>
        <StyledLogin>
        <form onSubmit={postLogin}>
        <Input name="Email" type="text" onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
        <Input name="Password" type="password" onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>

        <SignInButton>Sign In</SignInButton>
        </form>
        <Link to="/SignUp">
            <button style={btnStyle}>Are you not a member ?</button>
        </Link>
        </StyledLogin>
      </>
    )
  }

export default LoginWrapper;