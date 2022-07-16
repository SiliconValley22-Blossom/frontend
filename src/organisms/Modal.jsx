import React from 'react';
import Button from "../atom/Button";
import Input from "../atom/Input";
import styled from 'styled-components';

const StyledModal = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-bg-color);
  border-radius: 2rem;
`;

const StyledInput= styled.input`
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding: 1rem 5rem;
  border: none;
`;

function Modal(){
    return(
      <StyledModal>
        <StyledInput type="text" placeholder='ID'></StyledInput>
        <p><StyledInput type="password" placeholder='PW'></StyledInput></p>
        <p><StyledInput type="password" placeholder='PW 확인'></StyledInput></p>
        <p><StyledInput type="text" placeholder='닉네임'></StyledInput></p>
        <p><Button>회원가입</Button></p>
        </StyledModal>
    )
  }

  export default Modal;