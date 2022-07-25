import React from 'react';
import Button from "../atom/Button";
import User_info from "../molecule/User_info";
import styled from 'styled-components';
import NavBar from '../molecule/NavBar/NavBar_mypage';

const StyledPics = styled.div`
    background: white;
    width: 12rem;
    height: 7rem;
    padding: 4rem 3rem;
    margin-left: 2rem;
    margin-top: 2rem;
`;

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1px;
    margin: 2rem auto;
    flex: 1;
    align-items: center;
    width: 60rem;

`

const StyledUserBtns = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
`

function MyPageWrapper(){
    return(
            <>
                <NavBar/>
                <StyledWrapper>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                    <StyledPics/>
                </StyledWrapper>
                
            </>
            
              
// {/*  
//             <StyledUserBtns>
//                 <div><User_info></User_info></div>
//                 <div>
//                     <br/><Button>이메일 전송</Button>
//                     <br/><Button>PNG 다운</Button>
//                     <br/><Button>JPEG 다운</Button>
//                  </div>      
//             </StyledUserBtns> */}
        
        
        
    );
  }

  export default MyPageWrapper;