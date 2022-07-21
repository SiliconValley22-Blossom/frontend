import React from 'react';
import Button from "../atom/Button";
import User_info from "../molecule/User_info";
import styled from 'styled-components';


const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap : 2rem;
    align-items: center;
`;

const StyledWrapper = styled.div`
    background: var(--main-purple);
    border-radius: 2rem;
    width: 57rem;
    height: 70%;
    margin: 4rem 2rem 0 4rem;
    padding: 5rem 2rem 5rem 2rem;
`;

const StyledPics = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
`

const StyledUserBtns = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
`

function MyPageWrapper(){
    return(
        <StyledContainer>
            <StyledWrapper>
                <StyledPics>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                    <div>
                        <img src='https://grapee.jp/en/wp-content/uploads/69029_02main.jpg'></img>
                    </div>
                </StyledPics>
            </StyledWrapper>
 
            <StyledUserBtns>
                <div><User_info></User_info></div>
                <div>
                    <br/><Button>이메일 전송</Button>
                    <br/><Button>PNG 다운</Button>
                    <br/><Button>JPEG 다운</Button>
                 </div>      
            </StyledUserBtns>
        </StyledContainer>
        
    );
  }

  export default MyPageWrapper;