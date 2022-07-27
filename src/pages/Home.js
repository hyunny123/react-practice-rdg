import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Home = () => {
  const [openModalBtn, setOpenModalBtn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    usergrade: "",
  });

  const { username, usergrade } = userInfo;
  const changeBtn = username && usergrade;

  const handleBtn = (e) => {
    e.preventdefault();
    if (changeBtn) {
      setOpenModalBtn(false);
      alert("등록완료!");
    }
  };

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setOpenModalBtn(true);
    setUserInfo({
      username: "",
      usergrade: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "usergrade") {
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    } else {
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <Button onClick={openModal}>모달</Button>
      {openModalBtn && (
        <>
          <ModalForm></ModalForm>
        </>
      )}
      <Homepage>홈</Homepage>
      <div>
        <Link to="/about">소개</Link>
      </div>
      <div>
        <Link to="/profiles/velopert">이현정의 프로필</Link>
      </div>
      <div>
        <Link to="/profiles/gildong">길동</Link>
      </div>
      <div>
        <Link to="/profiles/void">익명</Link>
      </div>
    </div>
  );
};

export default Home;

const Homepage = styled.div`
  background: ${(props) => props.color || "blue"};
`;

const Button = styled.button`
  width: 30px;
  height: 15px;
  background-color: orange;
`;

const ModalForm = styled.butt;
