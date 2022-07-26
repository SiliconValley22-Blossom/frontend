import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../atom/Button";
import NavBar from '../molecule/NavBar/NavBar_colorize';
import { Link } from "react-router-dom";
import Loading from "../atom/Loading";


const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  border-radius: 50px;
  margin: 3rem auto 1.5rem;
  display: flex;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
`;
const StyledImg = styled.div`
    display : block ;
    margin : auto ;
`


const ColorizeFinishWrapper = (props) => {
    const [loading, setLoading] = useState(false);
    const [imageView, setImageView] = useState("");

    
    
    useEffect(() => {
        console.log(props.photo_id);

        axios({
            url: "/api/photos/" + props.photo_id,
            method: "get"
        }).then((response) =>{ 
            setLoading(false);
            console.log(response.data);
            setImageView(
            <StyledImg>
                <img src={'https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com/test/newFile.png'} alt="asdf"
                style={{margin: "auto 0", objectFit: "cover"}}/>
                    
            </StyledImg>)})
    },[]);
            
    

        

    return (
    <div>
        <NavBar />
        {loading? <Loading/>: null}
        <label style={{ zIndex: "8" }}></label>

        <StyledDropDown>
            {imageView}
        </StyledDropDown>
        
        <Button>download</Button>
        <Button>
            <Link to="/Colorize">other img</Link>
        </Button>
        </div>
        
    );
};

export default ColorizeFinishWrapper;