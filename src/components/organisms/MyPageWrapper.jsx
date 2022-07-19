import React from 'react';
import Button from "../atom/Button";
import User_info from "../molecule/User_info";
import styled from 'styled-components';
import MyPage from '../page/MyPage';

const StyledModal = styled.div`
    background: var(--main-purple);
    border-radius: 2rem;
    width: 57rem;
    height: 28rem;
    margin: 4rem 2rem 0 4rem;
    padding: 5rem 2rem 5rem 2rem;
`;

function MyPageWrapper(){
    return(
        <div className=" mypagewrapper">
            <StyledModal>
                <div className="wrap">
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
                </div>
            </StyledModal>
                
            <div className="container2">
                <div><User_info></User_info></div>
                <div>
                    <br/><Button>이메일 전송</Button>
                    <br/><Button>PNG 다운</Button>
                    <br/><Button>JPEG 다운</Button>
                 </div>
                    
            </div>
         
        </div>
       

      
    
              
        
      
      
        
        
    );
  }

  export default MyPageWrapper;