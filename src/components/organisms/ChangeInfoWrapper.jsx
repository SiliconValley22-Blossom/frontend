import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Input from "../atom/Input";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {ChevronBack} from '@styled-icons/ionicons-outline/ChevronBack';
import {Pencil} from '@styled-icons/boxicons-solid/Pencil';

const StyledPencil = styled(Pencil)`
    color : var(--dark-gray);
    width: 1.4rem;
    margin : 0rem 0.5rem 0rem 0rem;
`
const StyledChevronBack = styled(ChevronBack)`
    color : var(--dark-gray);
    width: 1.1rem;
    margin : 0rem 0rem 0.1em 0rem;
`
const IconWithWord = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1rem);
    grid-gap: 0rem;
    list-style: none;
    margin: 1rem 0rem 0rem 2.1rem;
   
`
const Title = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--dark-gray);
`

const StyledChangeInfo = styled.div`
  width: 20rem;
  padding-top: 0.5rem; 
  padding-bottom: 1.5rem;
  background: var(--main-white);
  border-radius: 2rem;
`;

const SaveButton = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: gray;
  color: gray;
  text-align: center;
  background: white;
  width: 10rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: var(--sub-purple);
    border-style: solid;
    border-color:var(--main-pink);
    transition : all 0.2s ease-out;
  }
`;

const BackToInfoButton = styled.button`
  border: none;
  background-color: transparent;
  width: 10rem;
  cursor: pointer;
  margin: 0rem 0rem 0rem 0rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Cormorant;
  color: gray;
`

function MyProfileWrapper(){

    const [inputs, setInputs] = useState({
        password: '',
        new_password:''
      })
    
    const [passwordCheck, setPasswordCheck] = useState('');

    const onpasswordCheck = (e) =>{
        setPasswordCheck(e.target.value)
      }
    
    const history = useHistory();

    const postChangePW = (ev) =>{
        ev.preventDefault();

        if(inputs['password']===""){
            window.alert("비밀번호를 입력해주세요.")
            return ;
        }else if(passwordCheck===""){
            window.alert("비밀번호를 확인해주세요.")
            return ;

        }else if(['new_password']===""){
            window.alert("새로운비밀번호를 입력해주세요.")
            return ;
            
        }else if(['new_password']===""){
            window.alert("새로운비밀번호를 입력해주세요.")
            return ;

        }if(inputs['password'] !== passwordCheck){
            return alert("비밀번호가 일치하지 않습니다!")
        }
        
        axios({
          url: "/api/users",
          method: "patch",
          data:{
              "password" : inputs['password'],
              "new_password" : inputs['new_password']
        }
        }).then((res) => {
          window.alert("비밀번호변경 완료 !");
          if(res.status===401){
            window.alert("기존 비밀번호를 다시 확인해주세요.");
            return ;
          }

          return history.push("/MyProfile");
        })
        .catch((error)=>{
        console.log(error);
        })
    }
  
    return(
            
      <>
     
        <StyledChangeInfo>
        <Title><StyledPencil/>Change Your Password</Title>
        <form onSubmit={postChangePW}>
          <Input type="password" name='Current Password' onChange={(e) => setInputs({...inputs,"password":e.target.value})}></Input>
          <Input type="password" name='New Password' onChange={(e) => setInputs({...inputs,"new_password":e.target.value})}></Input>
          <Input type="password" name='Check Password' value={passwordCheck} onChange={onpasswordCheck}></Input>
          <SaveButton>Save Password</SaveButton>
        </form>
        <Link to = '/MyProfile'>
            <IconWithWord>
                <li><StyledChevronBack/></li>
                <li><BackToInfoButton>Back to My Information</BackToInfoButton></li>
            </IconWithWord>
        </Link>
        
        </StyledChangeInfo>
      </>
      
    )
  }

  export default MyProfileWrapper;