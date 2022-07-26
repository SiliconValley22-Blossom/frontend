import React, { useState } from 'react';
import Button from "../atom/Button";
import Input from "../atom/Input";
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, Link} from "react-router-dom";

const StyledLogin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  width: 18rem;
  height: 14.5rem;
`;

  
function LoginWrapper(){

  const btnStyle = {
    color: "#BBBBBB",
    background: "white",
    border: "None",
    fontSize: "0.95rem",
    cursor:"pointer",
    textDecoration:"underline"
    
  };

  const [inputs, setInputs] = useState({
    email : '',
    password:''
  })
   
  const history=useHistory();
  
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
    const data = JSON.stringify(
      {
        "email":inputs['email'],
        "password": inputs['password']
      });

    console.log(data);
    axios({
        url: "/api/login",
        method: "post",
        data: {
          "email":inputs['email'],
          "password": inputs['password']
        }
      }).then((response) => {
        if(response.status===403){
          window.alert("로그인 실패");
          return ;
        }
        return history.push("/Colorize");
      });
    }

    return(
      <>
        <StyledLogin>
        <form onSubmit={postLogin}>
        <Input name="Email" type="text" onChange={(e) => setInputs({...inputs,"email":e.target.value})}></Input>
        <Input name="Password" type="password" onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>

        <Button>Sign In</Button>
        </form>
        <Link to="/signUp">
            <button style={btnStyle}>Are you not a member ?</button>
        </Link>
        </StyledLogin>
      </>
    )
  }

export default LoginWrapper;