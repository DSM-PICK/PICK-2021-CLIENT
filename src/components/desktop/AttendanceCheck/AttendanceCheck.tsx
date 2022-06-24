import React from "react";
import * as S from "./styles";
import Filter from "./Filter";
import Place from "./Place";
import StudentStatus from "./StudentStatus";
import Calendar from "./Canlendar";
const AttendanceCheck = () => {
  return (
    <S.AtInquiryWrapper>
      <S.SysDate>2021년 11월 11일</S.SysDate>
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
