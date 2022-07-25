import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';

const StyledLogin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  width: 18rem;
  height: 15rem;
`;

  
function LoginWrapper(){
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
        window.alert("로그인 성공");
        return history.push("/");
      });
    
    }

    return(
      <StyledLogin>
        <form onSubmit={postLogin}>
        <Input name="ID" type="text" onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
        <Input name="PW" type="password" onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>

        <Button>Sign In</Button>
        </form>
        <TextLink>Are you not a member ?</TextLink>
        </StyledLogin>
    )
  }

export default LoginWrapper;