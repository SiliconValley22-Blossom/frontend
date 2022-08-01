import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import {ChevronBack} from '@styled-icons/ionicons-outline/ChevronBack';
import {PersonFill} from '@styled-icons/bootstrap/PersonFill';

const StyledPersonFill = styled(PersonFill)`
    color : var(--dark-gray);
    width: 1.4rem;
    margin : 0rem 0.5rem 0.4rem 0rem;
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
    margin: 0.5rem 0rem 0rem 3.5rem;
   
`

const Info = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--dark-gray);
`

const StyledMyProfile = styled.div`
  width: 20rem;
  padding-top: 0.5rem; 
  padding-bottom: 1.5rem;
  background: var(--main-white);
  border-radius: 2rem;
`;

const ChangeButton = styled.button`
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: gray;
  color: gray;
  text-align: center;
  background: white;
  width: 13rem;
  margin: 0.5rem 0rem 0.5rem 0rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: var(--sub-purple);
    border-style: solid;
    border-color:var(--main-pink);
    transition : all 0.2s ease-out;
  }
`;

const BackButton = styled.button`
  border: none;
  background-color: transparent;
  width: 7rem;
  cursor: pointer;
  margin: 0rem 0rem 0rem 0rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Cormorant;
  color: gray;
`

const  MyProfileWrapper = () => {
  //닉네임이랑 이메일 불러오는 API

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios({
      url: "/api/users",
      method: "get",
    }).then((response) => {
      setUserInfo(<>
      <p>{response.data.nickname}</p>
      <p>{response.data.email}</p>
      </>
      );
    });
  }, []);

    return(
      <>
        <StyledMyProfile>
        <Info><StyledPersonFill/>Personal Information</Info>
        {userInfo}
        <Link to = '/ChangeInfo'><ChangeButton>Change Password</ChangeButton></Link>
        <Link to = '/MyPage'>
            <IconWithWord>
                <li><StyledChevronBack/></li>
                <li><BackButton>Back to My Page</BackButton></li>
            </IconWithWord>
        </Link>
        
        </StyledMyProfile>
      </>
      
    )
  }

  export default MyProfileWrapper;