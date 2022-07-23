import React, {useState} from 'react';
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';
import styled from 'styled-components';
import axios from 'axios';

const StyledPhotoChange = styled.div`
  margin: 4.5rem auto;
`;

// function postImage(){
//     const data = new FormData();
//     data.append('file',this.uploadInput.files[0])
//     data.append('filename',this.fileName.vaule);
//     axios({
//         method: "post",
//         url: "/image",
//         data: data
//     }).then((res) => {})
// }

function PhotoChange(){

    const [fileImage, setFileImage] = useState("");
    const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFileImage(URL.createObjectURL(event.target.files[0]));
    };

    const imageStyle={
        display:"block",
        width:"25rem",
        height:"auto",
        border:"1px solid black"
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
    )
}

export default PhotoChange;