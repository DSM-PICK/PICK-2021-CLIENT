import React, { FC, useEffect, useRef } from "react";
import * as S from "./styles";
import * as ACS from "../styles";
import { COLOR } from "../../../../../style/color";
import {
  TypeIndex as TypeAtom,
  StudentObject as StudentAtom,
  SelectedIndex,
} from "../../../../../modules/desktop/atom/ATChange";
import { useRecoilState, useRecoilValue } from "recoil";

const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const TypesArray: string[] = ["외출", "현체", "귀가", "이동", "취업"];
  const [typeIndex, setTypeIndex] = useRecoilState<number>(TypeAtom);
  const [studentObject, setStudentObject] = useRecoilState<any>(StudentAtom);
  const selectedIndex = useRecoilValue(SelectedIndex);
  const TypesRefs = useRef(new Array(TypesArray.length));

  const changeTypeIndex = (index: number) => {
    setTypeIndex(index);
  };

  useEffect(() => {
    if (studentObject.length === 0) return;

    setStudentObject(
      studentObject.length === 0
        ? studentObject
        : (prevArr: any) =>
            prevArr.map((value: any) => {
              return value.id === selectedIndex
                ? { ...value, type: typeIndex }
                : value;
            })
    );

    for (let i = 0; i < ACListArray.length; i++) {
      TypesRefs.current[i].style.backgroundColor = "#ededed";
      TypesRefs.current[i].style.color = "#6b6b6b";
    }

    TypesRefs.current[typeIndex].style.backgroundColor = `${COLOR.orange}`;
    TypesRefs.current[typeIndex].style.color = `${COLOR.white}`;
  }, [typeIndex]);

  useEffect(() => {
    setTypeIndex(
      studentObject.length === 0
        ? 0
        : studentObject.find((value: any) => value.id === selectedIndex).type
    );
  }, [selectedIndex]);

  return (
    <ACS.AttendanceChangeColumnBox>
      <ACS.AttendanceChangeColumnTitle>종류</ACS.AttendanceChangeColumnTitle>
      <ACS.AttendanceChangeElement>
        <S.Types>
          {TypesArray.map((value: string, index: number) => {
            return (
              <S.Type
                ref={(el) => (TypesRefs.current[index] = el)}
                key={index}
                onClick={() => changeTypeIndex(index)}
              >
                {value}
              </S.Type>
            );
          })}
        </S.Types>
      </ACS.AttendanceChangeElement>
    </ACS.AttendanceChangeColumnBox>
  );
};

export default AttendanceChange;
