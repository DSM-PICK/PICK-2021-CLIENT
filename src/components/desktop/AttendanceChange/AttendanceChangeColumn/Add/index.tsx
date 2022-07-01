import { FC, useEffect, useState } from "react";
import { searchStudents } from "../../../../../lib/api/desktop/AttendanceChange";
import {
  searchStatus,
  searchedStudents,
  StudentObject,
  SelectedIndex,
  Today,
} from "../../../../../modules/desktop/atom/ATChange";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./styles";
import { AttendanceChangeColumn } from "../../styles";
import SelectedStudent from "./SelectedStudents/index";
import {
  SelectedStudentsType,
  StudentObjectType,
} from "../../../../../lib/interface/desktop/AttendanceChange";

const Add: FC = (): JSX.Element => {
  const [search, setSearch] = useRecoilState(searchStatus);
  const [searchedStudentsArr, setSearchedStudentsArr] = useRecoilState(searchedStudents);
  const [inputValue, setInputValue] = useState<string>("");
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType[]>(StudentObject);
  const setSelectedIndex = useSetRecoilState(SelectedIndex);
  const today = useRecoilValue(Today);

  const selectStudent = async (object: SelectedStudentsType) => {
    if (studentObject.find((value) => value.id === object.id)) {
      alert("이미 추가하신 학생입니다.");
      return;
    }

    const data: StudentObjectType = {
      id: object.id,
      gcn: object.gcn,
      name: object.name,
      start_date: today,
      end_date: today,
      start_period: "",
      end_period: "",
      type: 0,
      reason: "",
      teacher_id: localStorage.getItem("teacher_id"),
    };

    setSearch(!search);
    setInputValue("");
    setSearchedStudentsArr([]);
    setSelectedIndex(object.id);
    setStudentObject([...studentObject, data]);
  };

  const getStudentDataOnSearch = async () => {
    await searchStudents(inputValue).then((res) => {
      setSearchedStudentsArr(res.data);
    });
  };

  useEffect(() => {
    if (inputValue === "") return;
    const debounce = setTimeout(() => {
      getStudentDataOnSearch();
    }, 400);
    return () => clearTimeout(debounce);
  }, [inputValue]);

  return (
    <AttendanceChangeColumn>
      <S.SearchAbsentsContainer>
        <S.AddStudentTitle>변동학생</S.AddStudentTitle>
        <S.AddAbsents onClick={() => setSearch(!search)}>학생 추가</S.AddAbsents>
        <S.SearchedStudentWrapper>
          <S.SearchStudentsInput
            placeholder="학생을 입력해주세요"
            display={search ? "block" : "none"}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <S.SearchedContainer
            display={searchedStudentsArr.length != 0 && search ? "flex" : "none"}
          >
            {searchedStudentsArr.map((value: StudentObjectType) => {
              return (
                <S.SearchedStudent
                  onClick={() => selectStudent(value)}
                  key={value.id}
                >{`${value.gcn} ${value.name}`}</S.SearchedStudent>
              );
            })}
          </S.SearchedContainer>
        </S.SearchedStudentWrapper>
      </S.SearchAbsentsContainer>
      <S.AddedStudentsContainer>
        {studentObject.map((value: { id: number; gcn: number; name: string }) => {
          return (
            <SelectedStudent id={value.id} gcn={value.gcn} name={value.name} key={value.gcn} />
          );
        })}
      </S.AddedStudentsContainer>
    </AttendanceChangeColumn>
  );
};

export default Add;
