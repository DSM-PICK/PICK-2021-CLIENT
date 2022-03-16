import React, { useState } from "react";
import * as S from "./styles";
const studentFilter: string[] = ["전체", "1학년", "2학년", "3학년"];
const statusFilter: string[] = ["전체", "외출", "현체", "귀가", "무단", "취업"];
const Filter = () => {
  const [stuFilterValue, setStuFilterValue] = useState("전체");
  const [statusFilterValue, setStatusFilterValue] = useState("전체");

  const onClick = (isStu: boolean, text: string) => {
    isStu ? setStuFilterValue(text) : setStatusFilterValue(text);
  };
  return (
    <S.Filter>
      <S.FilterTitle>학생별</S.FilterTitle>
      <S.StatusFilterBox isBig={false}>
        {studentFilter.map((filter, i) => (
          <S.Btn
            onClick={() => onClick(true, filter)}
            key={i}
            isCheked={filter === stuFilterValue}
          >
            {filter}
          </S.Btn>
        ))}
      </S.StatusFilterBox>

      <S.FilterTitle>상태별</S.FilterTitle>
      <S.StatusFilterBox isBig={true}>
        {statusFilter.map((filter, i) => (
          <S.Btn
            onClick={() => onClick(false, filter)}
            key={i}
            isCheked={filter === statusFilterValue}
          >
            {filter}
          </S.Btn>
        ))}
      </S.StatusFilterBox>
    </S.Filter>
  );
};

export default Filter;
