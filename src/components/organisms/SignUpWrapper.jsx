import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Input from "../atom/Input";
import Button from "../atom/Button";
import styled from 'styled-components';
import axios from 'axios';

const StyledSignUp = styled.div`
  margin: 4.5rem auto;
  width: 50%;
  background: var(--main-green);
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
      <StyledSignUp>
        <form onSubmit={postSignup}>
          <Input type="text" name='ID' onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
          <Input type="password" name='PW' onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>
          <Input type="password" name='PW 확인' value={passwordCheck} onChange={onpasswordCheck}></Input>
          <Input type="text" name='닉네임' onChange={(e) => setInputs({...inputs,"nickname":e.target.value})}></Input>
        <Button>회원가입</Button>
        </form>
        
        </StyledSignUp>
    )
  }

  export default SignUpWrapper;