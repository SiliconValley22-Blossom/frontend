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
                <form onSubmit={handleUpload} >
                    <div style = {{display : 'flex'}}>
                        {<Display></Display>}
                        {<Display></Display>}
                    </div>

                <div>
                    <div className="upload">
                        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])}/>
                        <Button type="submit">업로드</Button>
                        
                    </div>
                    <DownloadButton/>
                </div>
                </form> 
                
            </StyledPhotoChange>
    )
}

export default PhotoChangeWrapper;