import React,{useState} from 'react';
import styled from 'styled-components';

const StyledInput= styled.input`
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 1rem 2rem;
  border: none;
  width: 70%;
  
`;

function Input(props){
    
    return (
    <div>
      <StyledInput type={props.type} placeholder={props.name} onChange={props.onChange}></StyledInput>
  
    </div>
    )    
  }

  export default Input;