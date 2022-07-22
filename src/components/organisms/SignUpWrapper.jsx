import React from 'react';
import Input from "../atom/Input";
import Button from "../atom/Button";
import styled from 'styled-components';


const StyledSignUp = styled.div`
  margin: 9rem auto;
  width: 50%;
  padding-top: 3rem; 
  padding-bottom: 1.5rem;
  background: var(--main-green);
  border-radius: 2rem;
`;


function SignUpWrapper(){
    return(
      <StyledSignUp>
        <Input type="text" name='ID'></Input>
        <p><Input type="password" name='PW'></Input></p>
        <p><Input type="password" name='PW 확인'></Input></p>
        <p><Input type="text" name='닉네임'></Input></p>
        <p><Button>회원가입</Button></p>
        </StyledSignUp>
    )
  }

  export default SignUpWrapper;