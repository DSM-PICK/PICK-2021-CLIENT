import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import {
  AttendanceType,
  StudentAttendanceDetailType,
  StudentAttendanceType,
} from "../../../lib/interface/mobile/Attendance";
import { moveModal } from "../../../modules/mobile/atom/attendance";
import attendanceApi from "../../../lib/api/mobile/attendance";
import Student from "./Student";
import * as S from "./style";
import { toast } from "react-toastify";
import moment from "moment";

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

  const date = moment().format("YYYY-MM-DD");
  const queryClient = useQueryClient();
  const [state, setState] = useState<string>("");
  const [modal, setModal] = useRecoilState(moveModal);

  const [attendance, setAttendance] = useState<any>(null);
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

  // select를 선택했을때 일어나는 함수
  const changeSelectHandle = async (
    id: number[],
    e: React.ChangeEvent<HTMLSelectElement>,
    student: StudentAttendanceType,
    attendance_id: number | undefined
  ) => {
    const selectarr = selected;

    if (checkStatus.includes(id[0])) {
      for (let i = 0; i < checkStatus.length; i++) {
        selectarr[checkStatus[i] * 3 + id[1]] = e.target.value;
      }
    } else {
      selectarr[id[0] * 3 + id[1]] = e.target.value;
    }

    setState(e.target.value);
    // 선택된 select를 바꾸는 setState
    await setSelected([...selectarr]);
    // state가 이동이면 모달 띄워주는 함수
    await moveModalHandle(
      e.target.value,
      student,
      timeArray[id[1]],
      attendance_id
    );

    await attendanceHandle();
  };

  // state가 이동이면 modal 띄우기
  const moveModalHandle = (
    stateValue: string,
    student: StudentAttendanceType,
    period: number,
    attendance_id: number | undefined
  ) => {
    if (stateValue !== "출석") {
      setSelectState(true);
    } else {
      setSelectState(false);
    }

    // attendance_id가 있을떄
    if (!!attendance_id) {
      if (stateValue === "이동")
        setModal({
          ...modal,
          open: true,
          name: String(student?.name),
          student_id: Number(student?.id),
          gcn: String(student?.gcn),
          state: stateValue,
          period,
          attendance_id,
        });
      else {
        setModal({
          ...modal,
          open: false,
          name: String(student?.name),
          student_id: Number(student?.id),
          gcn: String(student?.gcn),
          state: stateValue,
          period,
          attendance_id,
        });
      }
    }
    // attendance_id undefiend 일때
    else {
      if (stateValue === "이동")
        setModal({
          ...modal,
          open: true,
          name: String(student?.name),
          student_id: Number(student?.id),
          gcn: String(student?.gcn),
          state: stateValue,
          period,
        });
      else {
        setModal({
          ...modal,
          open: false,
          name: String(student?.name),
          student_id: Number(student?.id),
          gcn: String(student?.gcn),
          state: stateValue,
          period,
        });
        // attendance Set
        setAttendance({
          student_id: Number(student?.id),
          state: stateValue,
          end_period: period,
          start_period: period,
          end_date: date,
          start_date: date,
          reason: null,
        });
      }
    }
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
          stdArr[test] = isPeriodArray[i];
        }

        if (isPeriodArray[i]?.period !== timeArray[j]) {
          stdArr.push(undefined);
        }
      }
    }

    return stdArr.splice(0, data.period);
  };

  const attendanceHandle = () => {
    console.log(state);

    // 이동이면 MoveModal에서 처리하기 때문에 아무 요청도 보내지 않음

    if (state === "이동") {
      console.log("이동");
    }
    // state가 이동이 아닐때 API 호출
    else {
      if (modal.attendance_id) {
        attendancePatchHandle();
      } else {
        attendancePostHandle();
      }
    }
  };

  const { mutate: attendancePatchHandle } = useMutation(
    () => attendanceApi.patchAttendance(modal),
    {
      onSuccess: () => {
        toast.success("학생 상태가 변경되었습니다.");
        queryClient.invalidateQueries("attendance_data");
      },
      onError: () => {
        queryClient.invalidateQueries("attendance_data");
      },
    }
  );

  const { mutate: attendancePostHandle } = useMutation(
    () => attendanceApi.postAttendance(attendance),
    {
      onSuccess: () => {
        toast.success("학생 상태가 변경되었습니다.");
        queryClient.invalidateQueries("attendance_data");
      },
      onError: () => {
        queryClient.invalidateQueries("attendance_data");
      },
    }
  );

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
                    changeSelectHandle={changeSelectHandle}
                    selected={selected}
                    student={student}
                    std={std}
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
