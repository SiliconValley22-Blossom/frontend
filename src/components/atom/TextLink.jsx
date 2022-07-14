import React from 'react';

function TextLink  ({disabled,children}){
    return <button className="textLink" disabled={disabled}>{children}</button>;
}

export default TextLink;