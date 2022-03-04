import styled from "@emotion/styled";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { attendanceData } from "../../../../modules/atom/attendance";
import { MainColor } from "../../../../style/color";

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

  const inputResetHandle = () => {
    setAttendance({
      student_id: 0,
      state: "이동",
      term: "",
      reason: "",
      name: "",
    });
  };

  return (
    <EnrollmentItem>
      <SubTitle>사유</SubTitle>
      <input
        ref={reasonRef}
        type="text"
        name="reason"
        value={reason}
        onChange={(e) => onChange(e)}
        className="text-input"
        placeholder="사유를 입력해주세요"
      />
      <SaveButton onClick={inputResetHandle}>학생 추가</SaveButton>
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
  padding: 0 15px;
  font-size: 17px;
  color: white;
  border-radius: 3px;
  margin: 2px 0;
`;

export default ReasonItem;
