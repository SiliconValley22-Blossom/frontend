import React,{useState} from 'react';

function Input(){
    const [text,setText] = useState('');
    const onChange=(e) => { setText(e.target.value);};
    
    return (
    <div>
      <input class='input' onChange={onChange} value={text}></input>
  
    </div>
    )    
  }

  export default Input;