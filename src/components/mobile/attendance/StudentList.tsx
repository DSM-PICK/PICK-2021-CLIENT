import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  AttendanceType,
  StudentAttendanceType,
} from "../../../lib/interface/mobile/Attendance";
import { moveModal } from "../../../modules/mobile/atom/attendance";
import Student from "./Student";
import * as S from "./style";

const timeArray = ["학생", "8교시", "9교시", "10교시"];
const arr = [...Array(20)].map((v, i) => i);
const time = new Array(3).fill(0);

interface Props {
  data: AttendanceType;
}

interface StudentType {
  student_id: number | any;
  student_name: string | any;
  gcn: number | any;
  student_attendance: StudentAttendanceType[];
}

const StudentList = ({ data }: Props) => {
  const [studentData, setStudentData] = useState<StudentType>();
  const [state, setState] = useState<string>("");
  const setModal = useSetRecoilState(moveModal);
  const [checkStatus, setCheckStatus] = useState<any[]>([]);
  const [selectState, setSelectState] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([
    ...Array(arr.length * time.length).fill(" "),
  ]);
  const allCheckClick = (checked: boolean) => {
    if (checked) {
      const idArray: any = [];
      arr.forEach((stu) => idArray.push(stu));
      setCheckStatus(idArray);
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

  const handleChangeSelect = (
    id: number[],
    e: React.ChangeEvent<HTMLSelectElement>,
    student: any
  ) => {
    const selectarr = selected;

    if (checkStatus.includes(id[0])) {
      for (let i = 0; i < checkStatus.length; i++) {
        selectarr[checkStatus[i] * 3 + id[1]] = e.target.value;
      }
    } else {
      selectarr[id[0] * 3 + id[1]] = e.target.value;
    }

    setSelected([...selectarr]);
    moveModalHandle(e.target.value);
    setState(e.target.value);

    setStudentData({
      ...studentData,
      gcn: student.gcn,
      student_id: student.student_id,
      student_name: student.student_name,
      student_attendance: student.student_attendance,
    });
  };

  // state가 이동이면 modal 띄우기
  const moveModalHandle = (stateValue: string) => {
    if (stateValue !== "출석") {
      setSelectState(true);
    } else {
      setSelectState(false);
    }

    if (stateValue === "이동")
      setModal({
        open: true,
        student_name: studentData?.student_name,
        student_id: studentData?.student_id,
        gcn: studentData?.gcn,
      });
    else
      setModal({
        open: false,
        student_name: studentData?.student_name,
        student_id: studentData?.student_id,
        gcn: studentData?.gcn,
      });
  };

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
      {data?.student_list.map((student, index) => (
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
          <span>
            {student.gcn} {student.student_name}
          </span>

          {student.student_attendance.map((std, idx) => {
            return (
              <Student
                key={idx}
                idx={idx}
                index={index}
                handleChangeSelect={handleChangeSelect}
                selected={selected}
                student={student}
                selectState={selectState}
              />
            );
          })}
        </S.StudentList>
      ))}
    </S.Container>
  );
};

export default StudentList;
