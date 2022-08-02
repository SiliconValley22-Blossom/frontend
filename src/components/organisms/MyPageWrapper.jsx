import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../molecule/NavBar/NavBar_mypage";
import axios from "axios";
import "../../App.css";

const StyledWhiteBox = styled.div`
  display: flex;
  background: white;
  width: 18rem;
  height: 18rem;
  justify-content: center;
  align-items: center;
`;

const StyledImageWrap = styled.div`
  top: 0;
  left: 0;
  height: 500px;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  &:hover{
    filter: grayscale(100%);
  }
`;

const StyledWhiteboxContainer = styled.div`
  display: grid;
  place-items: center;
  margin: 0px auto;
  margin-top: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 56.5rem;
  max-height: 90vh;
  height: auto;
  @media screen and (max-width:930px){
    grid-template-columns:1fr 1fr;
    width: auto;
    height: auto;
   
  }
  @media screen and (max-width:630px){
    grid-template-columns:1fr;
    width: auto;
    height: auto;
  }

  overflow: auto;
  &::-webkit-scrollbar {
    width: 11px;
    height: 8px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #eeeeee;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#f7ccca, #d8d1e1);
    border-radius: 10px;
  }

  
`;

const MyPageWrapper = () => {

  const [imageRander, setImageRander] = useState([]);
  const s3URL = "https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com/";
  const getImages = () => {
    return axios({
      url: "/api/photos",
      method: "get",
    }).then((response) => {
      const imageData = response.data.photo_list;
      const result = [];

      for (let i = 0; i < imageData.length; i++) {
        result.push(
          <StyledWhiteBox key={i}>
            <StyledImageWrap>
              <StyledImage src={s3URL + imageData[i][1]} alt="image not found" />
            </StyledImageWrap>
          </StyledWhiteBox>
        );
      }

      setImageRander(result);
    });
  };

  useEffect(() => {
    getImages().catch((error) => {
      if (error.response.status === 401) {
        axios({
          url: "/api/refresh",
          method: "get",
        }).then((response) => {
          getImages();
        });
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <StyledWhiteboxContainer>{imageRander}</StyledWhiteboxContainer>
    </>
  );
};

export default MyPageWrapper;
