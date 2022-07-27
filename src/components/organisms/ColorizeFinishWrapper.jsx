
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
const ColFinButton = styled.button`
  padding: 0.8rem 0.5rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: var(--sub-purple);
  color: var(--sub-purple);
  text-align: center;
  background: var(--main-pink);
  width: 11rem;
  margin: 1rem 1rem 0rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    color: white;
    background-color: transparent;
    border-style: solid;
    border-color: white;
    transition : all 0.2s ease-out;
  }
`;
const ColorizeFinishWrapper = (props) => {
    const [loading, setLoading] = useState(false);
    const [imageView, setImageView] = useState("");

    const getPhotos = () => {
      return axios({
        url: "/api/photos/" + props.photo_id,
        method: "get"
    }).then((response) =>{ 
        setLoading(false);
        console.log(response.data);
        setImageView(
        <StyledImg>
            <img src={'https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com/'+response.data.photo} alt="asdf"
            style={{margin: "auto 0", objectFit: "cover"}}/>
                
        </StyledImg>)})
    }

    useEffect(() => {
      console.log(props.photo_id);
      getPhotos().catch((error)=>{
        if(error.response.status===401){
            axios({
              url: "/api/refresh",
              method: "get"
        }).then((response)=>{
            getPhotos()
        })}
      })
        
    },[]);
    
    return (
    <div>
        <NavBar />
        {loading? <Loading/>: null}
        <label style={{ zIndex: "8" }}></label>

        <StyledDropDown>
            {imageView}
        </StyledDropDown>
        
      <ColFinButton>Download</ColFinButton>
      <Link to="/Colorize">
      <ColFinButton>
       Go Colorize!
     </ColFinButton>
     </Link>
        </div>
        
    );
};
export default ColorizeFinishWrapper;