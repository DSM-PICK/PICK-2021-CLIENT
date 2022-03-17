import React from "react";
import * as S from "./styles";
import Filter from "./Filter";
import StudentStatus from "./StudentStatus";
import Place from "./Place";
const AttendanceInquiry = () => {
  return (
    <S.AtInquiryWrapper>
      <S.SysDate>2021년 11월 11일</S.SysDate>
      <S.AtInquiryBox>
        <S.StatusBox>
          <S.Calendar />
          <Place />
        </S.StatusBox>
        <Filter />
        <StudentStatus />
      </S.AtInquiryBox>
    </S.AtInquiryWrapper>
  );
};

export default AttendanceInquiry;
