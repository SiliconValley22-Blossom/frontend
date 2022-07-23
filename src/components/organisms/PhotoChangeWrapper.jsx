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
        <StyledPhotoChange>
            <div style={{alignItems: "center", justifyContent: "center", }}>
            
            </div>
            <div style={imageStyle}>{fileImage && ( <img alt="sample" src={fileImage}
                                        style={{ margin: "auto" }} /> )}
            </div>
            <input
                name="imggeUpload"
                type="file"
                accept="image/*"
                onChange={saveFileImage} />
        </StyledPhotoChange>
                <form onSubmit={handleUpload} >
                </form> 
    )
}

export default PhotoChangeWrapper;