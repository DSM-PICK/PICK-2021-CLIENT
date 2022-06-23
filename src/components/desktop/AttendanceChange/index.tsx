import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import { Add, Date, Type, Reason } from "./ACColumn";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import {
  ReasonAtom,
  AttendanceChanges,
  StudentObject,
} from "../../../modules/desktop/atom/ATChange";
import {
  getAttendanceChangeList,
  postAttendanceChange,
} from "../../../lib/api/desktop/AttendanceChange";
import { typeArray } from "../../../constance";
import {
  postDataType,
  StudentObjectType,
  StudentListDataType,
} from "../../../lib/interface/desktop/ATChange";
import List from "./List";
import { COLOR } from "../../../style/color";

//출결 변경
const AttendanceChange: FC = (): JSX.Element => {
  const ACListArray: string[] = ["결석일", "결석자", "종류", "신고자", "비고"];
  const AttendanceChangeNavArr = ["전체", "2층", "3층", "4층", "5층", "특별실"];
  const ReasonState = useRecoilValue(ReasonAtom);
  const [attendancyChange, setAttendancyChange] =
    useRecoilState(AttendanceChanges);
  const studentObject = useRecoilValue(StudentObject);
  const resetStudentObject = useResetRecoilState(StudentObject);
  const [navBarIndex, setNavBarIndex] = useState(0);

  const postChanges = async () => {
    let data: postDataType[] = [];
    await studentObject.map((value: StudentObjectType) => {
      data.push({
        state: typeArray[value.type],
        term: `${value.sdate}-${value.sclass}T${value.fdate}-${value.fclass}`,
        student_id: value.id,
        reason: value.reason,
        teacher_id: localStorage.getItem("teacher_id"),
      });
    });

    data.map((value: postDataType) => {
      if (value.term.length <= 24) {
        alert("교시를 입력해주세요");
        return;
      }
      if (value.reason.length === 0) {
        alert("비고를 작성해주세요");
        return;
      }
      if (value.reason.length >= 10) {
        alert("비고가 10글자를 넘었어요");
        return;
      }

      postAttendanceChange(value)
        .then(() => {
          resetStudentObject();
          getAttendanceChangeList().then((res) => {
            setAttendancyChange(res.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getAttendanceChangeList().then((res) => {
      setAttendancyChange(res.data);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.AttendanceAddWrapper>
        <S.Title>출결 변동 사항 등록</S.Title>
        <S.AttendanceAddContainer>
          <Add />
          <S.RowDivider />
          {studentObject.length === 0 ? (
            <S.PleaseAddContainer>
              <S.PleaseAddStudentsFirstText>
                학생을 추가해주세요
              </S.PleaseAddStudentsFirstText>
              <S.PleaseAddStudentsFirstIMG />
            </S.PleaseAddContainer>
          ) : (
            <S.AttendanceAddBox>
              <Date />
              <Type />
              <Reason />
            </S.AttendanceAddBox>
          )}
          <S.AddButton
            type="button"
            onClick={postChanges}
            display={studentObject.length === 0 ? "none" : "flex"}
          >
            추가하기
          </S.AddButton>
          <S.ErrorMessage display={ReasonState.length > 10 ? "block" : "none"}>
            비고의 내용이 10글자를 넘었습니다
          </S.ErrorMessage>
        </S.AttendanceAddContainer>
        <S.ColumnDivider />
      </S.AttendanceAddWrapper>
      <S.Title>출결 변동내역</S.Title>
      <S.AttendanceChangeNavBar>
        {AttendanceChangeNavArr.map((value: string, index: number) => {
          return (
            <S.AttendanceChangeNav
              color={index === navBarIndex ? `${COLOR.orange}` : "#9f9f9f9f"}
              onClick={() => {
                setNavBarIndex(index);
              }}
            >
              {value}
            </S.AttendanceChangeNav>
          );
        })}
      </S.AttendanceChangeNavBar>
      <S.AttendanceChangeListContainer>
        <S.AttendanceChangeListHeader>
          {ACListArray.map((value: string, index: number) => {
            return (
              <S.AttendanceChangeListHead key={index}>
                {value}
              </S.AttendanceChangeListHead>
            );
          })}
        </S.AttendanceChangeListHeader>
        <S.AttendanceChangeListBody>
          {attendancyChange.map((value: StudentListDataType) => {
            return (
              <List
                index={value.id}
                key={value.id}
                date={value.term}
                name={value.name}
                teacherName={value.teacher_id}
                reason={value.reason}
                type={value.state}
              />
            );
          })}
        </S.AttendanceChangeListBody>
      </S.AttendanceChangeListContainer>
    </S.Wrapper>
  );
};

export default AttendanceChange;
