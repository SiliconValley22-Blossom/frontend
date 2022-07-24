import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from '../molecule/NavBar/NavBar_colorize';

const StyledBackground = styled.div`
  background: url("../images/colorizeBG.png");
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 3rem;
  margin-top: 4rem;
  display: flex;
`;

const ColorizeButton = styled.button`
padding: 1rem 2rem;
border-radius: 1rem;
border-style: solid;
border-color: var(--sub-purple);
color: white;
text-align: center;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
width: 12rem;
margin-top: 2rem;
cursor: pointer;
font-size: 1.1rem;
font-weight: bold;
background: var(--dark-grey)

`;

const HorizonLine = () => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid white",
          lineHeight: "0.1em"
        }}>
      </div>
    );
  };


const DragDrop = () => {
  const [file, setFile] = useState("");
  const [imageView, setImageView] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageView(reader.result);
        resolve();
      };
    });
  };

  const handleUpload = (ev) => {
    ev.preventDefault();
    
    const formData = new FormData();
    formData.append("file", file)
    
    axios({
        url: "/api/photos",
        method: "post",
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    }).then((response) =>{})
  }

  return (
    <StyledBackground>
        <NavBar/>
        <HorizonLine/>
      <form onSubmit={handleUpload} >
      <label style={{ zIndex: "8" }}>
        <StyledDropDown>
          {file == "" ? (
            <img
              src="images/dragAndDrop.png"
              style={{ margin: "auto auto auto auto" }}
            />
          ) : (
            <img
              src={imageView}
              style={{
                margin: "auto auto auto auto",
                objectFit: "cover",
              }}
            />
          )}
        </StyledDropDown>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          multiple={false}
          onChange={(e) => {
            setFile(e.target.files[0]);
            encodeFileToBase64(e.target.files[0]);
          }}
        />
      </label>

      <ColorizeButton>colorize!</ColorizeButton>
      </form>
    </StyledBackground>
  );
};

export default DragDrop;