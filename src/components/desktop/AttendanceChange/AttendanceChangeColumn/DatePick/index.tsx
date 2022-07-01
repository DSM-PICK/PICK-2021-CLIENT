import React, { FC, useEffect, useState } from "react";
import * as S from "./styles";
import * as ACS from "../styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  FModal,
  SModal,
  FDateValue,
  SDateValue,
  StudentObject,
  SelectedIndex,
  SClassValue,
  FClassValue,
} from "../../../../../modules/desktop/atom/ATChange";
import Calendar from "../../../Calendar/Calendar";
import { StudentObjectType } from "../../../../../lib/interface/desktop/ATChange";
import { typeArray } from "../../../../../constance/index";

const DatePick: FC = (): JSX.Element => {
  const [isFOpen, setIsFOpen] = useRecoilState<boolean>(FModal);
  const [isSOpen, setIsSOpen] = useRecoilState<boolean>(SModal);
  const endDateValue = useRecoilValue<string>(FDateValue);
  const startDateValue = useRecoilValue<string>(SDateValue);
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType[] | any>(
    StudentObject
  );
  const selectedIndex = useRecoilValue(SelectedIndex);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startPeriod, setStartPeriod] = useRecoilState<string>(SClassValue);
  const [endPeriod, setEndPeriod] = useRecoilState<string>(FClassValue);

  const handleClassInputStart = (e: any) => {
    if (studentObject.length === 0) return;
    setStudentObject((prevArr: StudentObjectType[]) =>
      prevArr.map((value: StudentObjectType) => {
        return value.id === selectedIndex ? { ...value, start_period: e.target.value } : value;
      })
    );
    setStartPeriod(e.target.value);
  };

  const handleClassInputFinish = (e: any) => {
    if (studentObject.length === 0) return;
    setStudentObject((prevArr: StudentObjectType[]) =>
      prevArr.map((value: StudentObjectType) => {
        return value.id === selectedIndex ? { ...value, end_period: e.target.value } : value;
      })
    );
    setEndPeriod(e.target.value);
  };

  useEffect(() => {
    if (studentObject.length === 0) return;
    setStartDate(
      `${
        studentObject
          .find((value: StudentObjectType) => value.id === selectedIndex)
          .start_date.split("-")[0]
      }년
         ${
           studentObject
             .find((value: StudentObjectType) => value.id === selectedIndex)
             .start_date.split("-")[1]
         }월
         ${
           studentObject
             .find((value: StudentObjectType) => value.id === selectedIndex)
             .start_date.split("-")[2]
         }일`
    );

    setEndDate(
      `${
        studentObject
          .find((value: StudentObjectType) => value.id === selectedIndex)
          .end_date.split("-")[0]
      }년
           ${
             studentObject
               .find((value: StudentObjectType) => value.id === selectedIndex)
               .end_date.split("-")[1]
           }월
           ${
             studentObject
               .find((value: StudentObjectType) => value.id === selectedIndex)
               .end_date.split("-")[2]
           }일`
    );
  }, [selectedIndex, endDateValue, startDateValue]);

  useEffect(() => {
    if (studentObject.length === 0) return;
    setStartPeriod("");
    setEndPeriod("");
    setStartPeriod(
      studentObject.find((value: StudentObjectType) => value.id === selectedIndex).start_period ===
        ""
        ? ""
        : studentObject.find((value: StudentObjectType) => value.id === selectedIndex).start_period
    );
    setEndPeriod(
      studentObject.find((value: StudentObjectType) => value.id === selectedIndex).end_period === ""
        ? ""
        : studentObject.find((value: StudentObjectType) => value.id === selectedIndex).end_period
    );
  }, [selectedIndex]);

  return (
    <ACS.AttendanceChangeColumnBox>
      <ACS.AttendanceChangeColumnTitle>날짜</ACS.AttendanceChangeColumnTitle>
      <ACS.AttendanceChangeElement>
        <S.DateBox>
          <S.Date>
            <S.DateText
              onClick={() => {
                if (startDate === "학생을 추가해주세요") return;
                setIsFOpen(!isFOpen);
              }}
            >
              {startDate}
            </S.DateText>
            <Calendar isOpen={isFOpen} index={0} />
            <div className="classContainer">
              <S.ClassInput maxLength={2} value={startPeriod} onChange={handleClassInputStart} />
              <div>교시</div>
            </div>
          </S.Date>
          <span>~</span>
          <S.Date>
            <S.DateText
              onClick={() => {
                if (endDate === "학생을 추가해주세요") return;
                setIsSOpen(!isSOpen);
              }}
            >
              {endDate}
            </S.DateText>
            <Calendar isOpen={isSOpen} index={1} />
            <div className="classContainer">
              <S.ClassInput maxLength={2} value={endPeriod} onChange={handleClassInputFinish} />
              <div>교시</div>
            </div>
          </S.Date>
        </S.DateBox>
      </ACS.AttendanceChangeElement>
    </ACS.AttendanceChangeColumnBox>
  );
};

export default DatePick;
