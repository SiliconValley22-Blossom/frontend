import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Input from "../atom/Input";
import Button from "../atom/Button";
import styled from 'styled-components';
import axios from 'axios';

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../img/color-gray.png');
    background-size: cover;
`;

const StyledSignUp = styled.div`
  margin: 9rem auto;
  width: 30rem;
  padding-top: 3rem; 
  padding-bottom: 1.5rem;
  background: var(--main-white);
  border-radius: 2rem;
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

    const data= JSON.stringify(
      {
        "email": inputs['email'],
        "password" : inputs['password'],
        "nickname" : inputs['nickname']
      });

      if(inputs['password'] !== passwordCheck){
        return alert("비밀번호가 일치하지 않습니다!")
      }
      

      axios({
        url: "/api/users",
        method: "post",
        data:{data}
      }).then((res) => {
        window.alert("가입이 완료 되었습니다!");
        return history.push("/Login");
      })
      .catch((error)=>{
        console.log(error);
      })
  }

    return(
      <StyledContainer>
        <StyledSignUp>
        <form onSubmit={postSignup}>
          <Input type="text" name='email' onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
          <Input type="password" name='password' onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>
          <Input type="password" name='check password' value={passwordCheck} onChange={onpasswordCheck}></Input>
          <Input type="text" name='nickname' onChange={(e) => setInputs({...inputs,"nickname":e.target.value})}></Input>
        <Button>Sign Up</Button>
        </form>
        
        </StyledSignUp>
      </StyledContainer>
      
    )
  }

  export default SignUpWrapper;