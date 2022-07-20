import React from 'react';
import styled from 'styled-components';
import { Download } from '@styled-icons/boxicons-regular/Download';

const StyledDownload = styled.button`
    width: 5rem;
    height: 5rem;
    margin: 0 50rem 0 69.5rem;
    padding: 1rem 1rem 1rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--main-pink);
    border: none;
    color: var(--main-white);
    border-radius: 5rem;
`;

function DownloadButton  ({disabled,children}){
    return <StyledDownload disabled={disabled}>{children}
    <Download/>
    </StyledDownload>;
  }
  
export default DownloadButton;


  
