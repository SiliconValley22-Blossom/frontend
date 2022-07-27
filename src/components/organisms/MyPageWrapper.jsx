import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBar from '../molecule/NavBar/NavBar_mypage';
import axios from 'axios';
import '../../App.css'


const StyledPics = styled.div`
    background: white;
    width: 18rem;
    height: 18rem;
    margin-top: 2.5rem;
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
    grid-gap: 1rem;
    margin: 2rem auto;
    flex: 1;
    align-items: center;
    width: 65rem;
    height: 95vh;

    overflow: auto;
    &::-webkit-scrollbar{
      width: 11px;
      height: 8px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: #eeeeee;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb{
      background: linear-gradient(#f7ccca, #d8d1e1);
      border-radius: 10px;
    }
`

const MyPageWrapper= () => {
  const [imageRander, setImageRander] = useState([]);

  const getImages = () => {
    return axios({
      url: "/api/photos",
      method: "get"
  }).then((response) =>{ 
    const imageData = response.data.photo_list;
    const result =[];

      for(let i = 0; i<imageData.length;i++) {
        result.push(<StyledPics key={i}>
          <StyledImage>
            <img src={s3URL + imageData[i][1]} alt="image not found"/>
          </StyledImage>
        </StyledPics>)}
      
      
    setImageRander(result);
  })}

  useEffect(() => {
    getImages().catch((error)=>{
      if(error.response.status===401){
        axios({
          url: "/api/refresh",
          method: "get"
      }).then((response)=>{
        getImages()

      })}
    })

  },[]);
  const s3URL = 'https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com'

  return(

      <>
        <NavBar/>
          <StyledWrapper>
            {imageRander}
          </StyledWrapper>      
      </>
  );
}

export default MyPageWrapper;