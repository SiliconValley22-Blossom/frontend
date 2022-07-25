import React,{useEffect, useState} from 'react';
import Button from "../atom/Button";
import styled from 'styled-components';
import NavBar from '../molecule/NavBar/NavBar_mypage';
import axios from 'axios';
import scrollbar from 'smooth-scrollbar'


const StyledContainer = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url('../img/mypage.png');
    background-size: cover;
    position: fixed;
    overflow-y: hidden;
`;

const HorizonLine = () => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid rgb(171, 171, 171)",
          lineHeight: "0.1em"
        }}>
      </div>
    );
  };

const StyledPics = styled.div`
    background: white;
    width: 18rem;
    height: 18rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.div`
  top: 0;
  left: 0;
  max-width: 100%;
 
  object-fit: cover;
  margin: auto;
`
const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1px;
    margin: auto;
    flex: 1;
    align-items: center;
    width: 65rem;
    height: 95vh;

    overflow: auto;


`

const MyPageWrapper= () => {
  const [imageRander, setImageRander] = useState([]);

  useEffect(() => {
   
    axios({
        url: "/api/photos",
        method: "get"
    }).then((response) =>{ 
      const imageData = response.data.photo_list;
      const result =[];

      for(let i = 0; i<imageData.length;i++) {
      //  result.push(<span key={i}>{"/black/"+imageData[i][0]}</span>);
      // result.push(<span key={i}>{"/color/"+imageData[i][1]}</span>);
        
      //api 반영 후 이렇게 수정
      // result.push(<img src={s3URL + imageData[i][1]} alt="asdf"/>)

        result.push(<StyledPics key={[i,0]}>
          {<StyledImage>
            <img src={s3URL + '/color/e6148a50-0700-41c8-8da8-c95e22bbd327.jpeg'} alt="asdf"/>
          </StyledImage>}
        
        </StyledPics>)
        result.push(<StyledPics key={[i,1]}>
          { <StyledImage>
            <img src={s3URL + '/black/274ae8ea-335a-430b-8326-3c8e63a3cce0.jpeg'} alt="asdf"/>
          </StyledImage>}
        </StyledPics>)
      }
      
      setImageRander(result);

    })

  },[]);
  const s3URL = 'https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com'
  

  return(

      <StyledContainer>
        <NavBar/>
        <HorizonLine/>
        <StyledWrapper>
          {imageRander}

        </StyledWrapper>
              
      </StyledContainer>
  );
}

  export default MyPageWrapper;