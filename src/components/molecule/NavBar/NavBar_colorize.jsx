import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./NavBar_colorize.css";
import { Cookies } from "react-cookie";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import DropDown from "../DropDown/DropDown_colorize";

const StyledHeader = styled.nav`
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
  const [isActive, setIsActive] = useState(false);
  const [dropDown, setDropDown] = useState(null);

  useEffect(
    (e) => {
      const pageClickEvent = (e) => {};
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
    <StyledHeader>
      <Link to="/" className="navbar-logo-colorize">
        <img
          style={{ width: "11rem" }}
          alt="blossomLogo"
          src="../../../../logo-4.png"
        />
      </Link>
      <StyledArrow onClick={(e) => setIsActive(!isActive)}></StyledArrow>

      <ul className="nav-menu-colorize">
        <li className="nav-item-colorize">
          <Link to="/MyPage" className="nav-links-colorize">
            My page
          </Link>
        </li>

        <li className="nav-item-colorize">
          <Link onClick={logout} to="/" className="nav-links-colorize">
            Logout
          </Link>
        </li>

        <li className="nav-item-colorize">
          <Link to="/MyProfile" className="nav-person-colorize">
            <PersonFill />
          </Link>
        </li>
      </ul>
      <StyledDropDown>
        {dropDown}
      </StyledDropDown>
      
    </StyledHeader>
  );
};
export default NavBar;
