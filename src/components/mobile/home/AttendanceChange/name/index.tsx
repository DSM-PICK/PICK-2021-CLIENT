import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  attendanceData,
  nameInputAtom,
} from "../../../../../modules/mobile/atom/attendance";
import teacher from "../../../../../lib/api/mobile/teacher";
import { StudentType } from "../../../../../lib/interface/mobile/teacher";

const NameItem = () => {
  const [nameInput, setNameInput] = useRecoilState(nameInputAtom);
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const [student, setStudent] = useState<StudentType[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOnInputClick = (item: StudentType) => {
    setNameInput(item.name);
    setAttendance({
      ...attendance,
      student_id: item.id,
      name: item.name,
    });
    setOpen(false);
  };

  useEffect(() => {
    student.length < 1 ? setOpen(false) : setOpen(true);
  }, [student]);

  useEffect(() => {
    if (nameInput === "") return;
    const debounce = setTimeout(() => {
      teacher.getStudentNameApi(nameInput).then((res) => {
        setStudent(res.data);
      });
    }, 300);

    return () => clearTimeout(debounce);
  }, [nameInput]);

  return (
    <EnrollmentItem>
      <SubTitle>이름</SubTitle>
      <input
        type="text"
        name="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="text-input"
        placeholder="이름을 입력해주세요"
        autoComplete="off"
      />
      <StudentList open={open}>
        {student.map((item) => (
          <span
            key={item.id}
            onClick={() => {
              handleOnInputClick(item);
            }}
          >
            {`${item.gcn} ${item.name}`}
          </span>
        ))}
      </StudentList>
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
  position: relative;

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

export const StudentList = styled.div<{ open: boolean }>`
  z-index: 1;
  width: fit-content;
  height: fit-content;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(149, 149, 149, 0.25);
  border-radius: 5px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
  position: absolute;
  right: 20px;
  top: 40px;

  & span {
    font-size: 20px;
  }
`;

export default NameItem;
