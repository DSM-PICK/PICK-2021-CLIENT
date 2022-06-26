import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  AttendanceType,
  StudentAttendanceDetailType,
  StudentAttendanceType,
} from "../../../lib/interface/mobile/Attendance";
import { moveModal } from "../../../modules/mobile/atom/attendance";
import Student from "./Student";
import * as S from "./style";

const arr = [...Array(20)].map((v, i) => i);

interface Props {
  data: AttendanceType;
}

const StudentList = ({ data }: Props) => {
  // 8 9 10 교시 period로 계산해서 배열에 넣어주기
  const timeArray: number[] = [];
  for (let i = 10; i > 10 - data?.period; i--) {
    timeArray.push(i);
  }
  timeArray.reverse();

  const [studentData, setStudentData] = useState<StudentAttendanceType>();
  const [state, setState] = useState<string>("");
  const [modal, setModal] = useRecoilState(moveModal);
  const [checkStatus, setCheckStatus] = useState<any[]>([]);
  const [selectState, setSelectState] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([
    ...Array(arr.length * timeArray.length).fill(" "),
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
      id: student.id,
      name: student.name,
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
        ...modal,
        open: true,
        name: String(studentData?.name),
        id: Number(studentData?.id),
        gcn: String(studentData?.gcn),
      });
    else
      setModal({
        ...modal,
        open: false,
        name: String(studentData?.name),
        id: Number(studentData?.id),
        gcn: String(studentData?.gcn),
      });
  };

  // student_attendance에 있는 정보 넘겨 주는 함수
  const periodArray = (student: StudentAttendanceType) => {
    let stdArr: any = [];
    let isPeriodArray: any = [];
    let stdDetail = student.student_attendance.map((atd) => atd);

    for (let key = 0; key <= data.period - 1; key++) {
      isPeriodArray.push(stdDetail[key]);
    }

    for (let i = 0; i < data.period; i++) {
      for (let j = 0; j < timeArray.length; j++) {
        if (isPeriodArray[i]?.period === timeArray[j]) {
          const test = timeArray.indexOf(timeArray[j]);
          console.log(timeArray[j], true, test);
          stdArr[test] = isPeriodArray[i];
        }

        if (isPeriodArray[i]?.period !== timeArray[j]) {
          stdArr.push(undefined);
        }
      }
    }

    return stdArr.splice(0, data.period);
  };

  return (
    <S.Container>
      <S.StudentListTitle>
        <S.CheckBoxContainer>
          <input
            id="every"
            type="checkbox"
            onChange={(e) => allCheckClick(e.target.checked)}
            checked={checkStatus.length === arr.length}
          />
          <label htmlFor={"every"} />
        </S.CheckBoxContainer>
        <S.Title>학생</S.Title>
        <S.StdStateList>
          {timeArray.map((title, index) => (
            <S.Title key={index}>{title}교시</S.Title>
          ))}
        </S.StdStateList>
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
            {student.gcn} {student.name}
          </span>
          <S.StdStateList>
            {periodArray(student)?.map(
              (std: StudentAttendanceDetailType, idx: number) => {
                return (
                  <Student
                    key={idx}
                    idx={idx}
                    index={index}
                    handleChangeSelect={handleChangeSelect}
                    selected={selected}
                    student={std}
                    selectState={selectState}
                  />
                );
              }
            )}
          </S.StdStateList>
        </S.StudentList>
      ))}
    </S.Container>
  );
};

export default StudentList;
