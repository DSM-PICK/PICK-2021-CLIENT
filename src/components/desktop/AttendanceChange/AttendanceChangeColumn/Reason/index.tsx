import { FC, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  StudentObject,
  SelectedIndex,
  ReasonAtom,
} from "../../../../../modules/desktop/atom/ATChange";
import * as S from "./styles";
import * as ACS from "../styles";
import { StudentObjectType } from "../../../../../lib/interface/desktop/ATChange";

const Reason: FC = (): JSX.Element => {
  const [reason, setReason] = useRecoilState(ReasonAtom);
  const [studentObject, setStudentObject] = useRecoilState<StudentObjectType[]>(StudentObject);
  const selectedIndex = useRecoilValue(SelectedIndex);

  const checkWordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReason(e.target.value);
    setStudentObject(
      studentObject.length === 0
        ? studentObject
        : (prevArr: StudentObjectType[]) =>
            prevArr.map((value: StudentObjectType) => {
              return value.id === selectedIndex ? { ...value, reason: e.target.value } : value;
            })
    );
  };

  useEffect(() => {
    if (studentObject.length === 0) return;
    setReason(
      studentObject.find((value: StudentObjectType) => value.id === selectedIndex)?.reason ?? ""
    );
  }, [selectedIndex]);

  return (
    <ACS.AttendanceChangeColumnBox>
      <ACS.AttendanceChangeColumnTitle>비고</ACS.AttendanceChangeColumnTitle>
      <ACS.AttendanceChangeElement>
        <S.NoteInput
          type="text"
          placeholder="최대 10글자로 입력해주세요 (선택)"
          onChange={checkWordLength}
          value={reason}
        />
      </ACS.AttendanceChangeElement>
    </ACS.AttendanceChangeColumnBox>
  );
};

export default Reason;
