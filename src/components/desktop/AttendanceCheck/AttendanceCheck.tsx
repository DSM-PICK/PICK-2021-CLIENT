import React from "react";
import * as S from "./styles";
import Filter from "./Filter";
import Place from "./Place";
import StudentStatus from "./StudentStatus";
import Calendar from "./Calendar/Canlendar";
import { useRecoilValue } from "recoil";
import { afterSchoolDay } from "../../../modules/desktop/atom/AfterSchool";
const AttendanceCheck = () => {
  const day = useRecoilValue(afterSchoolDay);
  return (
    <S.AtInquiryWrapper>
      <S.SysDate>{day.day}</S.SysDate>
      <S.AtInquiryBox>
        <S.StatusBox>
          <Calendar />
          <Place />
        </S.StatusBox>
        <Filter />
        <StudentStatus />
      </S.AtInquiryBox>
    </S.AtInquiryWrapper>
  );
};

export default AttendanceCheck;
