import React, { useState } from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';

const StyledLogin = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-purple);
  border-radius: 2rem;
`;

  
function LoginWrapper(){
  const [inputs, setInputs] = useState({
    email : '',
    password:''
  })
   


const postLogin = (ev) => {
  if(inputs===""){
    window.alert("아이디와 비밀번호를 입력해주세요!");
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
        window.alert("로그인 성공!");
      });
    
    }

    return(
      <StyledLogin>
        <form onSubmit={postLogin}>
        <Input name="ID" type="text" onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
        <Input name="PW" type="password" onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>

        <Button>로그인</Button>
        </form>
        <br/><TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledLogin>
    )
  }

export default LoginWrapper;