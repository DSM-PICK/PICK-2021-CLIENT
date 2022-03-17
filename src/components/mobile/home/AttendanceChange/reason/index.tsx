import styled from "@emotion/styled";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../../../modules/mobile/atom/attendance";
import { MainColor } from "../../../../../style/color";
import { toast } from "react-toastify";

const ReasonItem = () => {
  const reasonRef = useRef<any | null>(null);
  const [attendance, setAttendance] = useRecoilState(attendanceData);

  const { reason } = attendance;

  const onChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;

    setAttendance({
      ...attendance,
      [name]: value,
    });
  };

  const addStudents = () => {
    if (attendance.reason.length > 10) {
      toast.error("비고가 10글자를 넘습니다");
    } else if (attendance.name === "") {
      toast.error("이름을 입력해주세요");
    } else if (attendance.term.length === 23 || attendance.term.length === 24) {
      toast.error("날짜를 선택해주세요");
    } else {
      setAttendance({
        student_id: attendance.student_id,
        state: attendance.state,
        term: attendance.term,
        reason: attendance.reason,
        name: attendance.name,
      });
    }
  };

  return (
    <EnrollmentItem>
      <SubTitle>사유</SubTitle>
      <input
        required
        ref={reasonRef}
        type="text"
        name="reason"
        value={reason}
        onChange={(e) => onChange(e)}
        className="text-input"
        placeholder="사유를 입력해주세요"
      />
      <SaveButton onClick={addStudents}>학생 추가</SaveButton>
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
