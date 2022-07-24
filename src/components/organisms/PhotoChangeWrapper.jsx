import React, {useState} from 'react';
import '../../App.css'
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';
import styled from 'styled-components';
import axios from 'axios';
import NavBar from '../molecule/NavBar/NavBar_colorize';

const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../img/colorize.png');
    background-size: cover;
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

const StyledPhotoChange = styled.div`
  margin: 4.5rem auto;

`;

const PhotoChangeWrapper = () => {
    const [file, setFile] = useState('');


    const handleUpload = (ev) => {
        ev.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append("file", file)
        
        axios({
            url: "/api/photos",
            method: "post",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) =>{})
    
    }

    return(
        <StyledContainer>
            <NavBar/>
            <HorizonLine/>
        <StyledPhotoChange>
            <div style={{alignItems: "center", justifyContent: "center", }}></div>
            {/* <div style={imageStyle}>{fileImage && ( <img alt="sample" src={fileImage} style={{ margin: "auto" }} /> )}</div> */}
            <form onSubmit={handleUpload} >
              <input
                  name="imggeUpload"
                  type="file"
                  accept="image/*"
                  />
            </form> 
        </StyledPhotoChange>
        </StyledContainer>
        
    )
}

export default PhotoChangeWrapper;
