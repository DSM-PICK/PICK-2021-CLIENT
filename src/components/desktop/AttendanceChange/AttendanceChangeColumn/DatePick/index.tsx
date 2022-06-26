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

const DatePick: FC = (): JSX.Element => {
  const [isFOpen, setIsFOpen] = useRecoilState<boolean>(FModal);
  const [isSOpen, setIsSOpen] = useRecoilState<boolean>(SModal);
  const fdateValue = useRecoilValue<string>(FDateValue);
  const sdateValue = useRecoilValue<string>(SDateValue);
  const [studentObject, setStudentObject] = useRecoilState<
    StudentObjectType[] | any
  >(StudentObject);
  const selectedIndex = useRecoilValue(SelectedIndex);
  const [sdate, setSdate] = useState("");
  const [fdate, setFdate] = useState("");
  const [sclass, setSclass] = useRecoilState<string>(SClassValue);
  const [fclass, setFclass] = useRecoilState<string>(FClassValue);

  const handleClassInputStart = (e: any) => {
    if (studentObject.length === 0) return;
    setStudentObject((prevArr: any) =>
      prevArr.map((value: any) => {
        return value.id === selectedIndex
          ? { ...value, sclass: e.target.value }
          : value;
      })
    );
    setSclass(e.target.value);
  };

  const handleClassInputFinish = (e: any) => {
    if (studentObject.length === 0) return;
    setStudentObject((prevArr: any) =>
      prevArr.map((value: any) => {
        return value.id === selectedIndex
          ? { ...value, fclass: e.target.value }
          : value;
      })
    );
    setFclass(e.target.value);
  };

  useEffect(() => {
    if (studentObject.length === 0) return;
    return (
      setSdate(
        `${
          studentObject
            .find((value: StudentObjectType) => value.id === selectedIndex)
            .sdate.split("-")[0]
        }년
         ${
           studentObject
             .find((value: StudentObjectType) => value.id === selectedIndex)
             .sdate.split("-")[1]
         }월
         ${
           studentObject
             .find((value: StudentObjectType) => value.id === selectedIndex)
             .sdate.split("-")[2]
         }일`
      ),
      setFdate(
        `${
          studentObject
            .find((value: StudentObjectType) => value.id === selectedIndex)
            .fdate.split("-")[0]
        }년
           ${
             studentObject
               .find((value: StudentObjectType) => value.id === selectedIndex)
               .fdate.split("-")[1]
           }월
           ${
             studentObject
               .find((value: StudentObjectType) => value.id === selectedIndex)
               .fdate.split("-")[2]
           }일`
      )
    );
  }, [selectedIndex, fdateValue, sdateValue]);

  useEffect(() => {
    setSclass("");
    setFclass("");
    if (studentObject.length === 0) return;
    setSclass(
      studentObject.find(
        (value: StudentObjectType) => value.id === selectedIndex
      ).sclass === ""
        ? ""
        : studentObject.find(
            (value: StudentObjectType) => value.id === selectedIndex
          ).sclass
    );
    setFclass(
      studentObject.find(
        (value: StudentObjectType) => value.id === selectedIndex
      ).fclass === ""
        ? ""
        : studentObject.find(
            (value: StudentObjectType) => value.id === selectedIndex
          ).fclass
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
                if (sdate === "학생을 추가해주세요") return;
                setIsFOpen(!isFOpen);
              }}
            >
              {sdate}
            </S.DateText>
            <Calendar isOpen={isFOpen} index={0} />
            <div className="classContainer">
              <S.ClassInput
                maxLength={2}
                value={sclass}
                onChange={handleClassInputStart}
              />
              <div>교시</div>
            </div>
          </S.Date>
          <span>~</span>
          <S.Date>
            <S.DateText
              onClick={() => {
                if (fdate === "학생을 추가해주세요") return;
                setIsSOpen(!isSOpen);
              }}
            >
              {fdate}
            </S.DateText>
            <Calendar isOpen={isSOpen} index={1} />
            <div className="classContainer">
              <S.ClassInput
                maxLength={2}
                value={fclass}
                onChange={handleClassInputFinish}
              />
              <div>교시</div>
            </div>
          </S.Date>
        </S.DateBox>
      </ACS.AttendanceChangeElement>
    </ACS.AttendanceChangeColumnBox>
  );
};

export default DatePick;
