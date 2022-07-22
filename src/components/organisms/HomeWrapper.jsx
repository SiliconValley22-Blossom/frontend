import React from 'react';
import Button from "../atom/Button";
import TextLink from "../atom/TextLink";
import Input from "../atom/Input";
import styled from 'styled-components';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PhotoChange from '../page/PhotoChange'

const StyledLogin = styled.div`
  margin: 4.5rem auto;
  width: 12rem;
  background: var(--main-purple);
  border-radius: 2rem;
`;

function HomeWrapper(){
    return(
        <StyledLogin>
            <Router>
                <Link to ="/PhotoChange">
                    <Button>Start colorizing</Button>
                </Link>
                <Switch>
                    <Route path = "/PhotoChange" component = {PhotoChange}/>
                </Switch>
            </Router>
        </StyledLogin>

    )
  }

  export default HomeWrapper;