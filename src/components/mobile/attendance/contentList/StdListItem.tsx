import { useState } from "react";
import { StudentAttendanceType } from "../../../../lib/interface/mobile/Attendance";
import StateContainer from "./StateContainer";
import * as S from "./style";

interface Props {
  item: StudentAttendanceType;
  checkHandle: (e: any) => void;
}

const StdListItem = ({ item, checkHandle }: Props) => {
  const [check, setCheck] = useState<boolean>(false);

  const std = ["8교시", "9교시", "10교시"];

  return (
    <S.StudentItem check={check}>
      <label key={item.id} className="checkbox">
        <input
          type="checkbox"
          value={item.name}
          onChange={(e) => checkHandle(e)}
        />
      </label>
      <span>{item.gcn}</span>
      <span>{item.name}</span>
      {std.map((_, index) => (
        <StateContainer key={index} student={item} />
      ))}
    </S.StudentItem>
  );
};

export default StdListItem;
