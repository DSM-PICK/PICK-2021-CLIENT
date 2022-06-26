import { FC } from "react";
import { useRecoilState } from "recoil";
import { StudentAttendanceDetailType } from "../../../lib/interface/mobile/Attendance";
import { moveModal } from "../../../modules/mobile/atom/attendance";
import * as S from "./style";

type Props = {
  index: number;
  idx: number;
  handleChangeSelect: any;
  selected: string[];
  student: StudentAttendanceDetailType;
  selectState: boolean;
};

const Student: FC<Props> = ({
  index,
  idx,
  handleChangeSelect,
  selected,
  student,
  selectState,
}) => {
  const [modal, setModal] = useRecoilState(moveModal);

  const studentClickHandle = () => {
    console.log(student);
    console.log(idx);

    setModal({
      ...modal,
      //name: String(student?.name),
      id: Number(student?.id),
      //  gcn: String(student?.gcn),
    });
  };

  return (
    <S.StudentSelect
      // onClick={() => studentClickHandle()}
      id={String(index) + String(idx)}
      onChange={(e) => handleChangeSelect([index, idx], e, student)}
      value={selected[index * 3 + idx]}
      selectState={selectState}
    >
      <option value=" " selected>
        {student?.state}
      </option>
      <option value=" ">출석</option>
      <option value="이동">이동</option>
      <option value="외출">외출</option>
      <option value="무단">무단</option>
      <option value="현체">현체</option>
      <option value="귀가">귀가</option>
      <option value="취업">취업</option>
    </S.StudentSelect>
  );
};

export default Student;
