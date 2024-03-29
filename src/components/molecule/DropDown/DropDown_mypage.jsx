import React, {useState} from "react";
import {Link} from "react-router-dom";
import MenuItems from '../../atom/MenuItems_mypage'
import './DropDown.css';


function DropDown_mypage () {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <>
            <ul onClick = {handleClick} 
            className = {click ? 'dropdown-clicked' : 'dropdown'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link className = {item.cName} to= {item.path} onClick =
                            {() => setClick(false)}> {item.title} </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DropDown_mypage;
