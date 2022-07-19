import React from 'react';
import styled from 'styled-components';
import { Download } from '@styled-icons/boxicons-regular/Download';

const StyledDownload = styled.button`
    width: 74px;
    height: 74px;
    padding: 10px 11px 11px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--main-pink);
    border: none;
`;

function DownloadButton  ({disabled,children}){
    return <StyledDownload disabled={disabled}>{children}
    <Download/>
    </StyledDownload>;
  }
  
export default DownloadButton;


  
