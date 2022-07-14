import React from 'react';

function Button  ({disabled,children}){
  return <button className="button" disabled={disabled}>{children}</button>;
}

export default Button;