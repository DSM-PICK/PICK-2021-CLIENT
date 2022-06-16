import React, { FC } from "react";
import * as S from "./style";

type Props = {
  index: number;
  idx: number;
  handleChangeSelect: any;
  selected: string[];
  student: any;
  selectState: boolean;
};

const Student: FC<Props> = ({
  index,
  idx,
  handleChangeSelect,
  selected,
  student,
  selectState,
}) => {
  return (
    <S.StudentSelect
      id={String(index) + String(idx)}
      onChange={(e) => handleChangeSelect([index, idx], e, student)}
      value={selected[index * 3 + idx]}
      selectState={selectState}
      defaultValue={student.state}
    >
      <option value=" "> </option>
      <option value=" ">출석</option>
      <option value="이동">이동</option>
      <option value="외출">외출</option>
      <option value="무단">무단</option>
      <option value="현체">현체</option>
      <option value="귀가">귀가</option>
      <option value="취업">취업</option>
    </S.StudentSelect>
  );
};

export default Student;