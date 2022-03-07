import * as S from "./style";
import FloorClassItem from "./FloorClassItem";
import ListContainer from "./AttendanceContainer";
import { useState } from "react";
import SubTitle from "../../common/SubTitle";
import {
  ClassButtonList,
  StateBtnType,
} from "../../../../lib/interface/mobile/Attendance/StateBtnType";

const AttendanceChangeList = () => {
  const [selected, setSelected] = useState<number>(1);

  const selectedHandlerColor = (item: StateBtnType) => {
    setSelected(item.id);
  };

  return (
    <S.MainWrapper>
      <SubTitle title="출결변동내역" />
      <S.SelectButtonWrapper>
        {ClassButtonList.map((item: any) => (
          <FloorClassItem
            key={item.id}
            item={item}
            selectedHandlerColor={selectedHandlerColor}
            selected={selected}
          />
        ))}
      </S.SelectButtonWrapper>
      <ListContainer />
    </S.MainWrapper>
  );
};

export default AttendanceChangeList;
