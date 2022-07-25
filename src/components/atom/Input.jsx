import React,{useState} from 'react';
import styled from 'styled-components';

const StyledInput= styled.input`
  margin-top: 1rem;
  border-radius: 3rem;
  padding: 1rem 2rem;
  border: none;
  width: 10rem;
  outline: 1px solid #CDCDCD;
`;

function Input(props){
    
    return (
    <div>
      <StyledInput type={props.type} placeholder={props.name} onChange={props.onChange}></StyledInput>
  
    </div>
    )    
  }

  export default Input;