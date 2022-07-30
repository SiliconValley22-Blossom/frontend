import React, { useEffect,useState } from 'react';
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, Link} from "react-router-dom";
import {Cookies} from "react-cookie";

const StyledAdmin = styled.div`
    margin: 8rem auto;
    background: var(--main-white);
    border-radius: 2rem;
    padding: 1.5rem 1rem 1.5rem 1rem;
    height :10rem;
`;

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 2fr 1fr 0.5fr;
    place-items: start;
    border-style: solid none;
    border-color: transparent transparent grey;
`;

const StyledTitle = styled.div`
    display: flex;
    font-size: 1.2rem;
    font-weight: bold;
    color: grey;
    padding: 0rem 1rem 0.5rem 1rem;
`;

const StyledList = styled.div`
    display: grid;
    grid-template-columns: 14.5rem 11.4rem 6rem 5.5rem;
    place-items: start;
`;

const StyledItem = styled.div`
    display: flex;
    font-size: 1.1rem;
    font-weight: semi-bold;
    color: grey;
    margin-top: 1.5rem;
    padding: 0rem 1rem 0.5rem 1rem;
`;

const CheckBox = styled.div`
    display: flex;
    padding: 0rem 1rem 0.5rem 2rem;
    font-size: 1.1rem;
    margin-top: 1.5rem;
    color: grey;
`

  
function AdminWrapper(){


  const [inputs, setInputs] = useState({
    email : '',
    password:''
  })
   
  const history=useHistory();

  const cookie = new Cookies();
  
  useEffect(() => {
    if(cookie.get('access_token_cookie') != null) {
      history.push("/Colorize");
  }});  

  const postLogin = (ev) => {
    if(inputs['email']===""){
      window.alert("이메일을 입력해주세요.");
      return ;
    }
    else if(inputs['password']===""){
      window.alert("비밀번호를 입력해주세요.")
      return ;
    }
    console.log(inputs)
    ev.preventDefault();
 
    axios({
        url: "/api/login",
        method: "post",
        data: {
          "email":inputs['email'],
          "password": inputs['password']
        }
      }).then((response) => {
        if(response.status===401){
          window.alert("로그인 실패");
          return ;
        }
        return history.push("/Colorize");
      });
    }

    return(
        <StyledAdmin>
            <StyledHeader>
                <StyledTitle>Email</StyledTitle>
                <StyledTitle>Nickname</StyledTitle>
                <StyledTitle>Date</StyledTitle>
                <StyledTitle>Remove</StyledTitle>
            </StyledHeader>
            <StyledList>
                <StyledItem>yjshin229@gmail.com</StyledItem>
                <StyledItem>yjshin229</StyledItem>
                <StyledItem>2022.07.30</StyledItem>
                <CheckBox>No</CheckBox>
            </StyledList>
            <StyledList>
                <StyledItem>rlawldbs0911@naver.com</StyledItem>
                <StyledItem>Jiyoonnnnn</StyledItem>
                <StyledItem>2022.07.30</StyledItem>
                <CheckBox>No</CheckBox>
            </StyledList>


        </StyledAdmin>
    )
  }

export default AdminWrapper;