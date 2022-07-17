import React,{useState} from 'react';
import styled from 'styled-components';

const StyledInput= styled.input`
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding: 1rem 5rem;
  border: none;
`;

function Input(){
    const [text,setText] = useState('');
    const onChange=(e) => { setText(e.target.value);};
    
    return (
    <div>
      <StyledInput onChange={onChange} value={text}></StyledInput>
  
    </div>
    )    
  }

  export default Input;