import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import {
  attendanceData,
  attendanceDataList,
} from "../../../../modules/mobile/atom/attendance";
import StateItem from "./state";
import CalendarItem from "./date";
import NameItem from "./name";
import ReasonItem from "./reason";
import EnrollmentHistory from "./historyList";
import { BoxColor } from "../../../../style/color";
import SubTitle from "../../common/SubTitle";
import { toast } from "react-toastify";

const AttendanceChange = () => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);
  const [inputValue, setInputValue] = useState("");

  const attendanceListAdd = (
    e: React.FormEventHandler<HTMLFormElement> | any
  ) => {
    e.preventDefault();

    if (attendance.reason.length > 10) {
      toast.error("이유가 10글자를 넘습니다");
    } else if (attendance.reason.length === 0) {
      toast.error(attendance.state + "의 이유를 입력해주세요.");
    } else if (attendance.name === undefined) {
      toast.error("학생 이름을 입력해주세요.");
    } else if (attendance.term.length === 23 || attendance.term.length === 24) {
      toast.error("날짜를 선택해주세요.");
    } else {
      setAttendance({
        student_id: null,
        state: "외출",
        term: "",
        reason: "",
        name: "",
      });
      setInputValue("");
      setAttendanceList(attendanceList.concat(attendance));
    }
  };

  useEffect(() => {
    console.log(attendance);
  }, [attendance]);

  return (
    <AttendanceChangeWrapper>
      <SubTitle title="학생출결변경사항등록" />
      <ChangeBox>
        <Enrollment onSubmit={(e) => attendanceListAdd(e)}>
          <StateItem />
          <CalendarItem />
          <NameItem inputValue={inputValue} setInputValue={setInputValue} />
          <ReasonItem />
        </Enrollment>
        {/*  출결 등록 리스트 */}
        <EnrollmentHistory />
      </ChangeBox>
    </AttendanceChangeWrapper>
  );
};

const AttendanceChangeWrapper = styled.section`
  margin: 8% 0;
  width: 100%;
  height: 100%;
`;

const ChangeBox = styled.div`
  padding: 3%;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: ${BoxColor};
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(210, 210, 210, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Enrollment = styled.form`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AttendanceChange;
