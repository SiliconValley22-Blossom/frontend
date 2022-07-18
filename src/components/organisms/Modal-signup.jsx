import React from 'react';
import Button from "../atom/Button";
import Input from "../atom/Input";
import styled from 'styled-components';

const StyledModal = styled.div`
  background: #d8d1e1;
  border-radius: 2rem;
  width: 57rem;
  height: 30rem;
  margin: 50px 41.8px 0 43px;
  padding: 71px 41px 70.4px 41.2px;
`;

function Modal(){
    return(
      <StyledModal>
        <p><Input name="ID" type="text"></Input></p>
        <p ><Input name="PW" type="password"></Input></p>
        <p ><Input name="PW 확인" type="password"></Input></p>
        <p ><Input name="닉네임" type="text"></Input></p>
        <p><Button>회원가입</Button></p>
        </StyledModal>
    )
  }
  export default Modal;