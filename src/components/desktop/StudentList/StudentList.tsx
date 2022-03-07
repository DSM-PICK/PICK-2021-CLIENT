import React, { useState } from "react";
import { useEffect } from "react";
import * as S from "./styles";

const timeArray = ["학생", "8교시", "9교시", "10교시"];
const arr = [...Array(20)].map((v, i) => i);
const time = new Array(3).fill(0);
const StudentList = () => {
  const [checkStatus, setCheckStatus] = useState<any[]>([]);
  const allCheckClick = (checked: boolean) => {
    if (checked) {
      const idArray: any = [];
      arr.forEach((stu) => idArray.push(stu));
      setCheckStatus(idArray);
      console.log(idArray);
    } else {
      setCheckStatus([]);
    }
  };
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckStatus([...checkStatus, id]);
    } else {
      // 체크 해제
      setCheckStatus(checkStatus.filter((el) => el !== id));
    }
  };
  useEffect(() => {
    console.log(checkStatus);
  }, [checkStatus]);
  return (
    <S.Container>
      <S.StudentListTitle>
        <S.CheckBoxContainer>
          <input
            id={"every"}
            type={"checkbox"}
            onChange={(e) => allCheckClick(e.target.checked)}
            checked={checkStatus.length === arr.length}
          />
          <label htmlFor={"every"} />
        </S.CheckBoxContainer>
        {timeArray.map((title, index) => (
          <S.Title key={index}>{title}</S.Title>
        ))}
      </S.StudentListTitle>
      {arr.map((stduent, index) => (
        <S.StudentList key={index}>
          <S.CheckBoxContainer>
            <input
              id={String(index)}
              type={"checkBox"}
              onChange={(e) => handleSingleCheck(e.target.checked, index)}
              checked={checkStatus.includes(index)}
            />
            <label htmlFor={String(index)} />
          </S.CheckBoxContainer>
          <span>2216 이진우</span>

          {time.map((array, i) => (
            <S.StudentSelect key={i}>
              <option></option>
              <option>이동</option>
              <option>외출</option>
              <option>무단</option>
              <option>현체</option>
              <option>귀가</option>
              <option>취업</option>
            </S.StudentSelect>
          ))}
        </S.StudentList>
      ))}
    </S.Container>
  );
};

export default StudentList;
