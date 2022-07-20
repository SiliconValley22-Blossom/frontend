import React from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';


const StyledLogin = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-purple);
  border-radius: 2rem;
`;


function LoginWrapper(){
    return(
      <StyledLogin>
        <p><Input name="ID" type="text" _onChange={(e)=>{
          // setId(e.target.value);
        }}></Input></p>
        <p ><Input name="PW" type="password" _onChange={(e) => {
          // setPwd(e.target.value);
        }

        }></Input></p>
        <p><Button>로그인</Button></p>
        <TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledLogin>
    )
  }

  export default LoginWrapper;