import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';

const StyledSignUp = styled.div`
  width: 20rem;
  padding-top: 2rem; 
  padding-bottom: 1rem;
  background: var(--main-white);
  border-radius: 2rem;

`;

const SignUpButton = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: var(--sub-grey);
  color: gray;
  text-align: center;
  background: white;
  width: 8rem;
  margin: 0rem 0rem 1rem 0rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: var(--main-purple);
    border-style: solid;
    border-color:var(--main-pink);
    transition : all 0.2s ease-out;
  }
`;

function SignUpWrapper(){
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    nickname: ''
  })
  const [passwordCheck, setPasswordCheck] = useState('');

  const onpasswordCheck = (e) =>{
    setPasswordCheck(e.target.value)
  }

  const history = useHistory();
  
  const postSignup = (ev) =>{
    ev.preventDefault();

    if(inputs['email']===""){
      window.alert("이메일을 입력해주세요.");
      return ;
    }
    else if(inputs['password']===""){
      window.alert("비밀번호를 입력해주세요.")
      return ;
    }
    else if(passwordCheck===""){
      window.alert("비밀번호를 확인해주세요.")
      return ;
    }
    else if(inputs['nickname']===""){
      window.alert("닉네임을 입력해주세요.")
      return ;
    }


    if(inputs['password'] !== passwordCheck){
      return alert("비밀번호가 일치하지 않습니다!")
    }

    axios({
      url: "/api/users",
      method: "post",
      data: {
        "email": inputs['email'],
        "password" : inputs['password'],
        "nickname" : inputs['nickname']
      }
    }).then((res) => {
      window.alert("회원가입 완료 !");
      return history.push("/Login");
    })
    .catch((error)=>{
      if(error.response.status===400){
        window.alert("같은 이메일이 존재합니다. 다른 이메일을 입력해주십시오.");
        return;
      }
    })
  }

    return(
      <>
        <StyledSignUp>
        <form onSubmit={postSignup}>
          <Input type="text" name='Email' onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
          <Input type="password" name='Password' onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>
          <Input type="password" name='Check Password' value={passwordCheck} onChange={onpasswordCheck}></Input>
          <Input type="text" name='Nickname' onChange={(e) => setInputs({...inputs,"nickname":e.target.value})}></Input>
        <SignUpButton>Sign Up</SignUpButton>
        </form>
        
        </StyledSignUp>
      </>
      
    )
  }

  export default SignUpWrapper;