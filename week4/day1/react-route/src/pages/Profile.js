import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileData = {
  yj: {
    id: 1,
    name: "lyj",
    description: "10주 리액트 프로젝트 캠프를 수강하고 있습니다.",
  },
  gd: {
    id: 2,
    name: "길동",
    description: "아무개입니다.",
  },
};

const Profile = () => {
  const { username } = useParams(); // path="/profiles/:username" //파라미터 조회
  const navigate = useNavigate();
  const profile = ProfileData[username];
  // console.log(useParams());
  // console.log(username);
  // console.log(navigate);

  return (
    <div>
      <h3>
        {username} : {profile.name}
      </h3>
      <p>{profile.description}</p>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
};

export default Profile;
