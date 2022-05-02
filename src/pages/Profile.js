import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "이땡땡",
    desc: "리액트 열심히해보자",
  },
  gildong: {
    name: "홍길동",
    desc: "홍길동전 읽어봤어?",
  },
};

const Profile = () => {
  const params = useParams();
  const Profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {Profile ? (
        <div>
          <h2>{Profile.name}</h2>
          <p>{Profile.desc}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
