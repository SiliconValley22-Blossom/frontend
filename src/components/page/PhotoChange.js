import React from 'react';
import '../../App.css'
import Button from "../atom/Button";
import DownloadButton from '../atom/DownloadButton';
import Display from '../atom/Display';

import styled from 'styled-components';

const StyledPhotoChange = styled.div`
  margin: 4.5rem auto;
`;
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
                    <div><Button>업로드</Button></div>
                    <div><DownloadButton></DownloadButton></div>
                </p>
                
            </StyledPhotoChange>
    )
}

export default PhotoChange;