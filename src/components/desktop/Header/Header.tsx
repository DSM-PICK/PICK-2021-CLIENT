import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
const RegisterArr = [
  { link: "/", title: "출결변경" },
  { link: "/atcheck", title: "출석체크" },
  { link: "/schedule", title: "일정관리" },
  { link: "/atview", title: "출석조회" },
  { link: "/password", title: "비밀번호 변경" },
];
const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const checkLink = (index: number) => {
    const newURL = window.location.href;
    if (newURL.substr(21) === RegisterArr[index].link) {
      return <S.RegisterBotLine />;
    }
  };
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("teacher_id");
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };
  return (
    <S.Container>
      <S.RegisterContainer>
        {RegisterArr.map((header, i) => (
          <S.RegisterBox key={i}>
            <S.Register to={header.link}>{header.title}</S.Register>
            {checkLink(i)}
          </S.RegisterBox>
        ))}
      </S.RegisterContainer>
      <S.LogoutBtn onClick={logout}>로그아웃</S.LogoutBtn>
    </S.Container>
  );
};

export default Header;
