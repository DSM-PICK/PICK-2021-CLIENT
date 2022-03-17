import { Link, useLocation } from "react-router-dom";
import {
  activeAttendanceIcon,
  activeCalendarIcon,
  activeHomeIcon,
  attendanceIcon,
  calendarIcon,
  homeIcon,
} from "../../../../assets";
import { MainColor } from "../../../../style/color";
import * as S from "./style";

const Footer = () => {
  const pathName = useLocation().pathname;

  return (
    <S.FooterWrapper>
      <Link to="/home">
        {pathName === "/home" ? (
          <>
            <img src={activeHomeIcon} alt="" />
            <span style={{ color: `${MainColor}` }}>출결등록</span>
          </>
        ) : (
          <>
            <img src={homeIcon} alt="" />
            <span>출결등록</span>
          </>
        )}
      </Link>
      <Link to="/attendance">
        {pathName === "/attendance" ? (
          <>
            <img src={activeAttendanceIcon} alt="" />
            <span style={{ color: `${MainColor}` }}>학생출석</span>
          </>
        ) : (
          <>
            <img src={attendanceIcon} alt="" />
            <span>학생출석</span>
          </>
        )}
      </Link>
      <Link to="/calendar">
        {pathName === "/calendar" ? (
          <>
            <img src={activeCalendarIcon} alt="" />
            <span style={{ color: `${MainColor}` }}>일정관리</span>
          </>
        ) : (
          <>
            <img src={calendarIcon} alt="" />
            <span>일정관리</span>
          </>
        )}
      </Link>
    </S.FooterWrapper>
  );
};

export default Footer;
