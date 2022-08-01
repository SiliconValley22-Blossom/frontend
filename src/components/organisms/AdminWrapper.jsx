import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from "react-router-dom";
import {ChevronBack} from '@styled-icons/ionicons-outline/ChevronBack';
import {Trash} from '@styled-icons/heroicons-outline/Trash';

const StyledListContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  margin-top : 1.5rem;
  max-height: 35vh;
  overflow: auto;
  background : var(--main-gray);
  border-radius: 0.9rem;
  padding:  0.5rem 0rem 1rem 0.5rem;

  &::-webkit-scrollbar {
    margin-right: 0.5rem;
    width: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-gray);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-pink);
    border-radius: 10px;
  }
`;

const StyledAdmin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding: 1.5rem 1rem 1.5rem 1rem;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 2fr 1fr 0.5fr;
  place-items: start;
  border-style: solid none;
  border-color: transparent transparent grey;
  margin-top: 1.5rem;
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
  padding: 0.5em 0rem 0.6rem 0rem;
  border-radius: 0.8rem;
  place-items: start;
  background-color:var(--main-purple);
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
`;

const StyledItem = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: semi-bold;
  color: grey;
  padding: 0rem 0rem 0rem 1rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: grey;

  &:hover{
    color:var(--sub-pink);
  }
`;
const CheckBoxWrapper = styled.div`
    display: flex;
    padding: 0rem 1rem 0rem 3rem;
    font-size: 1.1rem;
    color: grey;
`;

const DeleteButton = styled.div`
  padding: 0.6rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.8rem;
  border-style: solid;
  border-color: var(--sub-grey);
  color: gray;
  justify-content: space-around;
  text-align: center;
  background: white;
  width: 8rem;
  margin: 1rem 0rem 0rem auto;
  cursor: pointer;
  font-size: 1rem;
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
const StyledTrash = styled(Trash)`
  width: 1.1rem;
  margin: 0rem 0.5rem 0.2rem 0rem;
  &:hover {
    color: white;
    border-style: none;
  }
`
const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid var(--sub-pink);
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;

  &:checked {
    border-color: pink;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color : pink;
  }
`;

const HomeButton = styled.button`
  border: none;
  background-color: transparent;
  width: 6rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Cormorant;
  color: gray;
`;

const StyledChevronBack = styled(ChevronBack)`
    color : var(--dark-gray);
    width: 1rem;
    margin : 0rem 0rem 0.1em 0rem;
`;
  
function AdminWrapper(){

  const [isChecked, setIsChecked] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);

  const checkHandler = ({target}) => {
    setIsChecked(!isChecked);
    checkedUserHandler(target.parentNode, target.value, target.checked);
  };

  const checkedUserHandler = (id, isChecked) => {
    if (isChecked) {
      checkedUsers.add(id);
      setCheckedUsers(checkedUsers);
    }else if (!isChecked && checkedUsers.has(id)){
      checkedUsers.delete(id);
      setCheckedUsers(checkedUsers);
    }
    return checkedUsers;
  };

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
              <StyledItem>
                {userInfos[i].user_id}
              </StyledItem>
              <StyledItem>
                <StyledLink to = {'/myPage/' + userInfos[i].nickname}>
                  {userInfos[i].email}
                </StyledLink>
              </StyledItem>
              <StyledItem>
                {userInfos[i].nickname}
              </StyledItem>
              <StyledItem>
                {userInfos[i].created_at.substring(6,17)}
              </StyledItem>
              <CheckBoxWrapper>
              <StyledInput type = 'checkbox' onChange ={(e) => checkHandler(e)}></StyledInput>
              </CheckBoxWrapper>
            </StyledList>
          );
        }
      setUserRander(result);
      });
  }, []);


  const UserDelete = (e) => {
    e.preventDefault();
    axios({
      url: "/api/admin/users",
      method: "delete",
      data: {
        "id_list": checkedUsers
      }
    }).then((response) => {
  });
};

    return(
        <StyledAdmin>
          <Link to ='/'>
          <StyledChevronBack/><HomeButton>Back to Home</HomeButton>
          </Link>
            <StyledHeader>
                <StyledTitle>ID</StyledTitle>
                <StyledTitle>Email</StyledTitle>
                <StyledTitle>Nickname</StyledTitle>
                <StyledTitle>Date</StyledTitle>
                <StyledTitle>Remove</StyledTitle>
            </StyledHeader>
            <StyledListContainer>
            <StyledList>
                <StyledItem>1</StyledItem>
                <StyledItem>yjshin229@gmail.com</StyledItem>
                <StyledItem>yjshin229</StyledItem>
                <StyledItem>2022.07.31</StyledItem>
                <CheckBoxWrapper><StyledInput type = 'checkbox' onChange ={(e) => checkHandler(e)}></StyledInput></CheckBoxWrapper>
            </StyledList>
            {userRander}
            </StyledListContainer>
            <DeleteButton onClick={(e) => UserDelete(e)}> <StyledTrash/>Delete User(s)</DeleteButton>
        </StyledAdmin>
    )
  }

export default AdminWrapper;