import React from 'react';
import Input from "../atom/Input";
import Button from "../atom/Button";
import styled from 'styled-components';

const StyledSignUp = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-green);
  border-radius: 2rem;
`;

function SignUpWrapper(){
    return(
      <StyledSignUp>
        <Input type="text" name='ID'></Input>
        <Input type="password" name='PW'></Input>
        <Input type="password" name='PW 확인'></Input>
        <Input type="text" name='닉네임'></Input>
        <Button>회원가입</Button>
        </StyledSignUp>
    )
  }

  export default SignUpWrapper;