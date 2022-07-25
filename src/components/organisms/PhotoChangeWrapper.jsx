import React, {useState} from 'react';
import '../../App.css'
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';
import styled from 'styled-components';
import axios from 'axios';

const StyledPhotoChange = styled.div`
  margin: 4.5rem auto;
`;

const PhotoChangeWrapper = () => {
    const [fileImage, setFileImage] = useState('');


    const handleUpload = (ev) => {
        ev.preventDefault();
        console.log(fileImage);
        const formData = new FormData();
        formData.append("fileImage", fileImage)
        
        axios({
            url: "/api/photos",
            method: "post",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((response) =>{})
    
    }

    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
      };

    return(
        <StyledPhotoChange>
            <div style={{alignItems: "center", justifyContent: "center", }}></div>
            <div>{fileImage && ( <img alt="sample" src={fileImage} style={{ margin: "auto" }} /> )}</div>
            <form onSubmit={handleUpload} >
              <input
                  name="imggeUpload"
                  type="file"
                  accept="image/*"
                  onChange={saveFileImage} />
            </form> 
        </StyledPhotoChange>
    )
}

export default PhotoChangeWrapper;
