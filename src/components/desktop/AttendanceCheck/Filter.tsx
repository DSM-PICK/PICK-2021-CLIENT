import React from "react";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import {
  statusFilter,
  studentFilter,
} from "../../../modules/desktop/atom/ATCheck";
const studentArr = [
  { name: "전체", value: 0 },
  { name: "1학년", value: 1 },
  { name: "2학년", value: 2 },
  { name: "3학년", value: 3 },
];
const statusArr: string[] = [
  "전체",
  "이동",
  "외출",
  "현체",
  "귀가",
  "무단",
  "취업",
];

const Filter = () => {
  const [stuFilterValue, setStuFilterValue] = useRecoilState(studentFilter);
  const [statusFilterValue, setStatusFilterValue] =
    useRecoilState(statusFilter);
  return (
    <S.Filter>
      <S.FilterTitle>학생별</S.FilterTitle>
      <S.StatusFilterBox isBig={false}>
        {studentArr.map((filter, i) => (
          <S.Btn
            onClick={() => setStuFilterValue(filter.value)}
            key={i}
            isCheked={filter.value === stuFilterValue}
          >
            {filter.name}
          </S.Btn>
        ))}
      </S.StatusFilterBox>

      <S.FilterTitle>상태별</S.FilterTitle>
      <S.StatusFilterBox isBig={true}>
        {statusArr.map((filter, i) => (
          <S.Btn
            onClick={() => setStatusFilterValue(filter)}
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
