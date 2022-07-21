import React from 'react';
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

// function login(){
//   const body={
//     "email":"asdf",
//     "password": "asdf"
//   }
//   body.append('file',this.uploadInput.files[0])
//   body.append('filename',this.fileName.vaule);
//   axios({
//       method: "post",
//       url: "/api/login",
//       data: body

//   }).then((response) => {})
// }
  
function LoginWrapper(){
    return(
      <StyledLogin>
        <Input name="ID" type="text"></Input>
        <Input name="PW" type="password"></Input>

        <Button >로그인</Button>

        <br/><TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledLogin>
    )
  }

export default LoginWrapper;