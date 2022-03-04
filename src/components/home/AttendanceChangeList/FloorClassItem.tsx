import React from "react";
import { MainColor } from "../../../style/color";
import { StateBtnType } from "../../../utils/interface/Attendance/StateBtnType";
import { LocationType } from "../../../utils/interface/location";
import * as S from "./style";

interface Props {
  item: LocationType | StateBtnType;
  selected: number;
  selectedHandlerColor: any;
}

const FloorClassItem = ({ item, selectedHandlerColor, selected }: Props) => {
  return (
    <S.ItemButton
      onClick={() => selectedHandlerColor(item)}
      style={{
        color: item.id === selected ? `${MainColor}` : "",
        fontWeight: item.id === selected ? 700 : "normal",
      }}
    >
      {item?.name}
    </S.ItemButton>
  );
};

export default FloorClassItem;
