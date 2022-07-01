import { FC, useState } from "react";
import * as S from "./styles";
import {
  SelectedIndex,
  StudentObject,
} from "../../../../../../modules/desktop/atom/ATChange";
import { useRecoilState } from "recoil";
import { StudentObjectType } from "../../../../../../lib/interface/desktop/AttendanceChange";

interface Props {
  id: number;
  gcn: number;
  name: string;
}

const SelectedStudent: FC<Props> = ({ id, gcn, name }) => {
  const [selected, setSelected] = useState<boolean>(true);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] =
    useRecoilState<number>(SelectedIndex);
  const [studentObject, setStudentObject] = useRecoilState(StudentObject);

  const deleteStudent = (id: number) => {
    setStudentObject(
      studentObject.filter((value: StudentObjectType) => value.id != id)
    );
  };

  return (
    <S.SelectedStudents
      key={id}
      onMouseEnter={() => setShowDelete(!showDelete)}
      onMouseLeave={() => setShowDelete(!showDelete)}
      onClick={() => {
        setSelected(!selected);
        setSelectedIndex(id);
      }}
    >
      <S.Selected display={selectedIndex === id ? "default" : "none"} />
      <div>{`${gcn} ${name}`}</div>
      <S.Delete
        display={showDelete ? "default" : "none"}
        onClick={(e) => {
          e.stopPropagation();
          deleteStudent(id);
          if (studentObject.length != 0) {
            setSelectedIndex(
              studentObject[
                studentObject.findIndex((value) => value.id === selectedIndex) -
                  1
              ].id
            );
          }
        }}
      >
        삭제
      </S.Delete>
    </S.SelectedStudents>
  );
};

export default SelectedStudent;
