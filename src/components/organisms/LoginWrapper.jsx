import React from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';

const StyledLogin = styled.div`
  margin: 8rem auto;
  width: 50%;
  background: var(--main-purple);
  border-radius: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
`;

function LoginWrapper(){
    return(
      <StyledLogin>
        <p><Input name="ID" type="text"></Input></p>
        <p ><Input name="PW" type="password"></Input></p>
        <p><Button>로그인</Button></p>
        <TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledLogin>
    )
  }

  export default LoginWrapper;