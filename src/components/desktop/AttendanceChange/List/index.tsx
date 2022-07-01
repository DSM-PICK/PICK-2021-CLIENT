import { FC, useState } from "react";
import * as S from "./styles";
import { COLOR } from "../../../../style/color";
import { deleteAttendanceChange } from "../../../../lib/api/desktop/AttendanceChange";

interface Props {
  date: string;
  name: string;
  type: string;
  teacherName: string;
  reason: string;
  index: number;
  handleAttendanceChange: () => Promise<void>;
}

const List: FC<Props> = ({
  date,
  name,
  type,
  teacherName,
  reason,
  index,
  handleAttendanceChange,
}): JSX.Element => {
  const [settingModal, setSettingModal] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<boolean>(false);

  const openModal = () => setSettingModal(true);
  const closeModal = () => setSettingModal(false);

  const deleteStudent = async (index: number) => {
    await deleteAttendanceChange(index);
    handleAttendanceChange();
  };

  return (
    <S.ACListColumns
      onMouseEnter={() => setOpacity(true)}
      onMouseLeave={() => {
        setOpacity(false);
        closeModal();
      }}
    >
      <S.ACListCells>{date}</S.ACListCells>
      <S.ACListCells>{name}</S.ACListCells>
      <S.ACListCells>{type}</S.ACListCells>
      <S.ACListCells>{teacherName}</S.ACListCells>
      <S.ACListCells>{reason}</S.ACListCells>
      <S.ACListSettings onMouseEnter={openModal} opacity={opacity ? 1 : 0}>
        <div />
        <div />
        <div />
      </S.ACListSettings>
      <S.SettingModal display={settingModal ? "flex" : "none"} opacity={opacity ? 1 : 0}>
        <S.SettingSelection color={COLOR.red} onClick={() => deleteStudent(index)}>
          삭제
        </S.SettingSelection>
      </S.SettingModal>
    </S.ACListColumns>
  );
};

export default List;
