import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <Link to="/profiles/velopert">벨로퍼트의 프로필</Link>
      </li>
      <li>
        <Link to="/profiles/gildong">홍길동의 프로필</Link>
      </li>
      <li>
        <Link to="/profiles/void">존재하지 않는 프로필</Link>
      </li>
    </div>
  );
};

export default Home;
