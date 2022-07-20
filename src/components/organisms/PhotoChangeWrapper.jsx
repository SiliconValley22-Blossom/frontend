import React from 'react';
import '../../App.css'
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';
import styled from 'styled-components';
import axios from 'axios';

const StyledPhotoChange = styled.div`
  margin: 4.5rem auto;
`;

function postImage(){
    const data = new FormData();
    data.append('file',this.uploadInput.files[0])
    data.append('filename',this.fileName.vaule);
    axios({
        method: "post",
        url: "/image",
        data: data
    }).then((res) => {})
}

function PhotoChange(){
    return(
            <StyledPhotoChange>
                <p>
                    <div style = {{display : 'flex'}}>
                    
                        {<Display></Display>}
                        {<Display></Display>}
                    </div>
                </p>
                <p>
                    <div className="upload">
                        <input type="file"/>
                        <Button onClick={postImage()}>업로드</Button>
                        
                    </div>
                        <DownloadButton/>
                </p>
                
            </StyledPhotoChange>
    )
}

export default PhotoChange;