import React from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';

const StyledModal = styled.div`
  background: #d8d1e1;
  border-radius: 2rem;
  width: 57rem;
  height: 30rem;
  margin: 4rem 2rem 0 2rem;
  padding: 5rem 2rem 5rem 2rem;
`;

function Modal(){
    return(
      <StyledModal>
        <p><Input name="ID" type="text"></Input></p>
        <p ><Input name="PW" type="password"></Input></p>
        <p><Button>로그인</Button></p>
        <TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledModal>
    )
  }

  export default Modal;