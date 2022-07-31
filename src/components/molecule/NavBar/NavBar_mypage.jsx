import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./NavBar_mypage.css";
import { useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import DropDown from "../DropDown/DropDown_mypage";

const HeaderMyPage = styled.nav`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-style: solid none;
  border-color: transparent transparent white;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;
const StyledArrow = styled(DownArrow)`
  display: none;

  @media screen and (max-width: 700px) {
    height: 1.3rem;
    cursor: pointer;
    display: flex;
    color: var(--sub-purple);
    margin-left: 0.5rem;
  }
`;
const StyledDropDown = styled.div` 
  display: none;

  @media screen and (max-width: 700px){
    display: flex;
    width: 100%;
    position: absolute;
    top: 0px;
    list-style: none;
    padding-left: 0px;
    text-align: center;
  }

`;
const NavBar = () => {
  const cookie = new Cookies();
  const history = useHistory();
  const dropDownRef = useRef("");
  const [isActive, setIsActive] = useState(false);
  const [dropDown, setDropDown] = useState(null);

  useEffect(
    (e) => {
      const pageClickEvent = (e) => {
        if (
          dropDownRef.current !== null &&
          !dropDownRef.current.contains(e.target)) {
          setIsActive(!isActive);
          console.log(e.target);
        }
        
      };
      if (isActive) {
        window.addEventListener("click", pageClickEvent);
      }
      return () => {
        window.removeEventListener("click", pageClickEvent);
      };
    },
    [isActive]
  );

  useEffect(() => {

    if (isActive) {
      return setDropDown(<DropDown />);
    }

    return setDropDown(null);
  }, [isActive]);

  const logout = () => {
    axios.post("/api/logout").then((res) => {
      cookie.remove("access_token_cookie");
      cookie.remove("refresh_token_cookie");

      history.push("/");
    });
  };

  return (
    <HeaderMyPage>
      <Link to="/" className="navbar-logo-mypage">
        <img
          style={{ width: "11rem" }}
          alt="blossomLogo"
          src="../../../../logo-4.png"
        />
      </Link>
      <div className="menu-container-mypage">
        <StyledArrow onClick={(e) => setIsActive(!isActive)}></StyledArrow>
      </div>

      <ul className="nav-menu-mypage">
        <li className="nav-item-mypage">
          <Link to="/Colorize" className="nav-links-mypage">
            Start Colorizing
          </Link>
        </li>

        <li className="nav-item-mypage">
          <Link to="/" className="nav-links-mypage" onClick={logout}>
            Logout
          </Link>
        </li>

        <li className="nav-item-mypage">
          <Link to="/MyProfile" className="nav-person-mypage">
            <PersonFill />
          </Link>
        </li>
      </ul>
      
      <StyledDropDown>
        {dropDown}
      </StyledDropDown>
 
      
      
      
    </HeaderMyPage>
  );
};
export default NavBar;
