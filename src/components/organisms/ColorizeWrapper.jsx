import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "../molecule/NavBar/NavBar_colorize";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDropDown = styled.div`
  width: 30rem;
  height: 40rem;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50px;
  margin: 4rem auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ColorizeButton = styled.button`
  padding: 0.7rem 1rem;
  border-radius: 1rem;
  border-style: solid;
  border-color: white;
  color: white;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 10rem;
  margin-top: 2rem;
  cursor: pointer;
  font-family: Cormorant;
  font-size: 1.4rem;
  font-weight: bold;
  background: transparent;

  &:hover {
    background: var(--main-pink);
    color: var(--sub-purple);
    border-color: var(--sub-purple);
  }
`;

const DragDropImg = styled.img`
  padding-bottom: 1rem;
  width: 10rem;
  height: 9rem;
`;

const DragDrop = () => {
  const [file, setFile] = useState("");
  const [imageView, setImageView] = useState("");
  const [colorPhotoId, setColorPhotoId] = useState("");
  const history = useHistory();

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

  const handleUpload = (ev) => {
    ev.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    console.log(colorPhotoId);

    const postPhoto = () => {
      return axios({
        url: "/api/photos",
        method: "post",
        data: formData,
        headers: { "Content-Type": "multipart/form-data charset=UTF-8" },
      }).then((response) => {
        return history.push("/Colorizefinish/" + response.data.color_photo_id);
      });
    };

    postPhoto().catch((error) => {
      if (error.response.status === 401) {
        axios({
          url: "/api/refresh",
          method: "get",
        }).then((response) => {
          postPhoto();
        });
      }
      if (error.response.status === 413) {
        window.alert("사진 파일이 너무 큽니다. 다른 파일을 입력해주세요.");
        return;
      }
    });
  };

  return (
    <Container>
      <NavBar />

      <form onSubmit={handleUpload}>
        <label style={{ zIndex: "8" }}>
          <StyledDropDown>
            {file === "" ? (
              <DragDropImg src="img/dragAndDrop.png" />
            ) : (
              <img
                src={imageView}
                style={{ margin: "auto", objectFit: "cover" }}
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
        <ColorizeButton>Colorize!</ColorizeButton>
      </form>
    </Container>
  );
};

export default DragDrop;
