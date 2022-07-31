import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledAdmin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
  height :10rem;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 2fr 1fr 0.5fr;
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
  grid-template-columns: 3rem 14.5rem 11.4rem 6rem 5.5rem;
  padding: 0.5em 0rem 0.7rem 0rem;
  border-radius: 0.8rem;
  place-items: start;
  background-color:var(--main-purple);
  margin-top: 1.5rem;
`;

const StyledItem = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: semi-bold;
  color: grey;
  padding: 0rem 0rem 0rem 1.3rem;
`;

const CheckBox = styled.div`
    display: flex;
    padding: 0rem 1rem 0rem 2rem;
    font-size: 1.1rem;
    color: grey;
`

const DeleteButton = styled.div`
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: var(--sub-grey);
  color: gray;
  text-align: center;
  background: white;
  width: 8rem;
  margin: 2rem auto 0rem auto;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: white;
    border-style: solid;
    background-color: red;
    border-color: black;
    transition : all 0.2s ease-out;
  }
`;

  
function AdminWrapper(){

  const [userInfos, setUserInfos] = useState([]);
  const [userRander, setUserRander] = useState([]);
  
  useEffect(() => {
    axios({
        url: "/api/admin/users",
        method: "get"
      }).then((response) => {
        setUserInfos(response.data);
        const result = [];
        for (let i = 0; i < userInfos.length; i++) {
          result.push(
            <StyledList key={i}>
              {/*
              <StyledItem>
                {userInfos[i].user_id}
              </StyledItem>
              */}
              <StyledItem>
                {userInfos[i].email}
              </StyledItem>
              <StyledItem>
                {userInfos[i].nickname}
              </StyledItem>
              <StyledItem>
                {userInfos[i].created_at.substring(0,10)}
              </StyledItem>
              <CheckBox>
                No
              </CheckBox>
            </StyledList>
          );
        }
      setUserRander(result);
      });
  });

    return(
        <StyledAdmin>
            <StyledHeader>
                <StyledTitle>ID</StyledTitle>
                <StyledTitle>Email</StyledTitle>
                <StyledTitle>Nickname</StyledTitle>
                <StyledTitle>Date</StyledTitle>
                <StyledTitle>Remove</StyledTitle>
            </StyledHeader>
            <StyledList>
                <StyledItem>1</StyledItem>
                <StyledItem>yjshin229@gmail.com</StyledItem>
                <StyledItem>yjshin229</StyledItem>
                <StyledItem>2022.07.31</StyledItem>
                <CheckBox>No</CheckBox>
            </StyledList>
            {userRander}

            <DeleteButton>Delete User(s)</DeleteButton>
        </StyledAdmin>
    )
  }

export default AdminWrapper;