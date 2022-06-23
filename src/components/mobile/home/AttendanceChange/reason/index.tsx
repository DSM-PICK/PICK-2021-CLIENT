import styled from "@emotion/styled";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  attendanceData,
  attendanceDataList,
  nameInputAtom,
} from "../../../../../modules/mobile/atom/attendance";
import { MainColor } from "../../../../../style/color";
import { toast } from "react-toastify";

const ReasonItem = () => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const resetNameInput = useResetRecoilState(nameInputAtom);
  const resetAttendanceReset = useResetRecoilState(attendanceData);

  const [attendanceList, setAttendanceList] =
    useRecoilState(attendanceDataList);

  const onChange = (e: any) => {
    e.preventDefault();

    setAttendance({
      ...attendance,
      reason: e.target.value,
    });
  };

  const addStudents = (e: any) => {
    e.preventDefault();

    if (attendance.reason.length > 10) {
      toast.error("이유가 10글자를 넘습니다");
    } else if (attendance.reason.length === 0) {
      toast.error(attendance.state + "의 이유를 입력해주세요.");
    } else if (attendance.name === undefined) {
      toast.error("학생 이름을 입력해주세요.");
    } else if (
      attendance.start_date.length === 23 ||
      attendance.end_date.length === 24
    ) {
      toast.error("날짜를 선택해주세요.");
    } else {
      setAttendanceList(attendanceList.concat(attendance));

      // 이름 입력 state reset
      resetNameInput();
      //  resetAttendanceReset();
    }
  };

  return (
    <EnrollmentItem>
      <SubTitle>사유</SubTitle>
      <input
        required
        type="text"
        value={attendance.reason}
        onChange={(e) => onChange(e)}
        className="text-input"
        placeholder="사유를 입력해주세요"
      />
      <SaveButton onClick={(e) => addStudents(e)}>학생 추가</SaveButton>
    </EnrollmentItem>
  );
};

const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

const EnrollmentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .field-item {
    display: flex;
  }

  .react-datepicker-wrapper {
    width: auto;
  }

  .example-custom-input {
    background: white;
    border: none;
  }

  .text-input {
    border-bottom: 1px solid black;
    outline: none;
    border: none;
    text-align: center;
    font-size: 18px;
  }
`;

const SaveButton = styled.button`
  outline: none;
  border: none;
  background-color: ${MainColor};
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
  margin: 2px 0;
  filter: drop-shadow(0px 2px 5px rgba(153, 153, 153, 0.25));
  font-size: 16px;
`;

export default ReasonItem;
