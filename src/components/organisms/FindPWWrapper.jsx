import React, { useEffect, useState } from "react";
import Input from "../atom/Input";
import styled from "styled-components";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { Cookies } from "react-cookie";

const StyledLogin = styled.div`
  margin: 8rem auto;
  background: var(--main-white);
  border-radius: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 18rem;
`;

const LoginButton = styled.button`
  border: none;
  background-color: transparent;
  width: 8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: Cormorant;
  margin-bottom: 0.5rem;
  color: gray;
`;

const SendEmail = styled.button`
  padding: 0.4rem 0.3rem;
  border-radius: 0.8rem;
  border-style: solid;
  border-color: var(--sub-grey);
  color: gray;
  text-align: center;
  background: white;
  width: 8rem;
  margin: 0rem 0rem 1rem 0rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  font-family: Cormorant;

  &:hover {
    color: var(--main-purple);
    border-style: solid;
    border-color: var(--main-pink);
    transition: all 0.2s ease-out;
  }
`;

function FindPWWrapper() {
  const [inputs, setInputs] = useState({
    email: "",
  });

  //API 확인 필요 (password 부분만 삭제함)
  const history = useHistory();

  const postLogin = (ev) => {
    ev.preventDefault();

    if (inputs["email"] === "") {
      window.alert("이메일을 입력해주세요.");
      return;
    }

    axios({
      url: "/api/users/reset-password",
      method: "post",
      data: {
        email: inputs["email"],
      },
    })
      .then((response) => {
        window.alert("해당 이메일로 임시비밀번호를 발급하였습니다!");
        return history.push("/Login");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.alert(
            "이메일이 존재하지 않습니다. 이메일을 다시 입력해주세요."
          );
          return;
        }
      });
  };

  return (
    <>
      <StyledLogin>
        <form onSubmit={postLogin}>
          <Input
            name="Email"
            type="text"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          ></Input>

          <SendEmail>Send Email</SendEmail>
        </form>
        <Link to="/login">
          <LoginButton>Back to Login</LoginButton>
        </Link>
      </StyledLogin>
    </>
  );
}

export default FindPWWrapper;
