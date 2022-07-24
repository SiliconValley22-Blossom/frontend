import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../atom/Button";
import NavBar from "../molecule/NavBar/NavBar_colorize";
import { useHistory } from "react-router-dom";

const StyledBackground = styled.div`
  background: url("../images/colorizeBG.png");
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  border-radius: 50px;
  margin: auto;
  margin-top: 5rem;
  display: flex;
`;

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid white",
        lineHeight: "0.1em",
      }}
    ></div>
  );
};

const DragDrop = () => {
  const [file, setFile] = useState("");
  const [imageView, setImageView] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageView(reader.result);
        resolve();
      };
    });
  };

  const history = useHistory();

  const handleUpload = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    axios({
      url: "/api/photos",
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {});

    return history.push("/ColorizeFinish");
  };

  return (
    <StyledBackground>
      <NavBar />
      <HorizonLine />
      <form onSubmit={handleUpload}>
        <label style={{ zIndex: "8" }}>
          <StyledDropDown>
            {file == "" ? (
              <img
                src="images/dragAndDrop.png"
                style={{ margin: "auto auto auto auto" }}
              />
            ) : (
              <img
                src={imageView}
                style={{
                  margin: "auto auto auto auto",
                  objectFit: "cover",
                }}
              />
            )}
          </StyledDropDown>
          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            multiple={false}
            onChange={(e) => {
              setFile(e.target.files[0]);
              encodeFileToBase64(e.target.files[0]);
            }}
          />
        </label>

        <Button>colorize</Button>
      </form>
    </StyledBackground>
  );
};

export default DragDrop;
