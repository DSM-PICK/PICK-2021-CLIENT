import React from "react";
import { Link } from "react-router-dom";
import { NavCalendarIcon, NavHomeIcon } from "../../../utils/assets";
import * as S from "./style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <Link to="/home">
        <img src={NavHomeIcon} alt="" />
      </Link>
      <Link to="/calendar">
        <img src={NavCalendarIcon} alt="" />
      </Link>
    </S.FooterWrapper>
  );
};

export default Footer;
