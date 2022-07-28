import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "../molecule/NavBar/NavBar_colorize";
import { Link } from "react-router-dom";
import Loading from "../atom/Loading";
import { Download } from "@styled-icons/boxicons-regular/Download";

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  border-radius: 50px;
  margin: 3rem auto 1.5rem;
  display: flex;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const StyledImg = styled.div`
  display: block;
  margin: auto;
`;
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
    transition: all 0.2s ease-out;
  }
`;
const ColorizeFinishWrapper = (props) => {
  const [loading, setLoading] = useState(true);
  const [imageView, setImageView] = useState("");
  const [imageData, setImageData] = useState("");

  useEffect(() => {
    axios({
      url: "/api/photos/" + props.photo_id,
      method: "get",
    }).then((response) => {
      setImageData(
        "https://picsum.photos/id/235/500/500?blur=10/" + response.data.photo
      );
    });
  }, []);

  const changeImageView = () => {
    setTimeout(() => {
      setLoading(false);
      setImageView(
        <StyledImg>
          <img
            src={imageData}
            style={{ margin: "auto 0", objectFit: "cover" }}
          />
        </StyledImg>
      );
    }, 8000);
  };

  useEffect(() => {
    changeImageView();
  }, [imageData]);

  return (
    <div>
      <NavBar />
      {loading ? <Loading /> : null}
      <label style={{ zIndex: "8" }}></label>

      <StyledDropDown>{imageView}</StyledDropDown>

      <a
        href=""
        download={
          "https://blossom-s3-test.s3.ap-northeast-2.amazonaws.com/" + imageData
        }
        target="_blank"
      >
        <ColFinButton>Download</ColFinButton>
      </a>
      <Link to="/Colorize">
        <ColFinButton>Go Colorize!</ColFinButton>
      </Link>
    </div>
  );
};
export default ColorizeFinishWrapper;
