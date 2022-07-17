import React from 'react';
import styled from 'styled-components';
import CloudDownloadOutline from '@styled-icons/evaicons-outline/CloudDownloadOutline';

const StyledDownload = styled.button`
    width: 74px;
    height: 74px;
    margin: 38px 452px 0 286px;
    padding: 10px 11px 11px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--main-pink);
    
    .cloud{
        width: 2rem;
        height: 2rem;
    }
`;

function DownloadButton  ({disabled,children}){
    return <StyledDownload disabled={disabled}>{children}
    <CloudDownloadOutline className = 'cloud' ></CloudDownloadOutline>
    </StyledDownload>;
  }
  
  export default DownloadButton;
  
