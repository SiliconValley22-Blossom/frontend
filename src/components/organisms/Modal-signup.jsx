        <StyledInput type="text" placeholder='ID'></StyledInput>
import React from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';

const StyledModal = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-bg-color);
  border-radius: 2rem;
`;

function Modal(){
    return(
      <StyledModal>
        <p><Input></Input></p>
        <p ><Input ></Input></p>
        <p><Button>로그인</Button></p>
        <TextLink>회원가입</TextLink>
        <TextLink>ID/PW찾기</TextLink>
        </StyledModal>
    )
  }

  export default Modal;