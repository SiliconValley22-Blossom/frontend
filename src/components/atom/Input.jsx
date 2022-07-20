import React,{useState} from 'react';
import styled from 'styled-components';

const StyledInput= styled.input`
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 1rem 5rem;
  border: none;
`;

function Input(props){
    const [text,setText] = useState('');
    const onChange=(e) => { setText(e.target.value);};
    
    return (
    <div>
      <StyledInput type={props.type} placeholder={props.name} onChange={onChange} value={text}></StyledInput>
  
    </div>
    )    
  }

  export default Input;