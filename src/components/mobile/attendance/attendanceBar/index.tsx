import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  ClassButtonList,
  StateBtnType,
} from "../../../../lib/interface/mobile/Attendance/StateBtnType";
import { floorData } from "../../../../modules/mobile/atom/attendance";
import { LoactionId } from "../../../../modules/mobile/atom/location";
import SelectItem from "./SelectItem";
import * as S from "./style";

const LocationBar = () => {
  const [selected, setSelected] = useState<number>(2);
  const setFloor = useSetRecoilState(floorData);
  const navigate = useNavigate();

  const { locationId } = useRecoilValue(LoactionId);

  const selectedHandlerColor = (item: StateBtnType) => {
    navigate(`/attendance?floor=${item.floor}&id=${Number(locationId)}`);
    setSelected(item.id);
    setFloor(item?.floor);
  };

  return (
    <S.SelectBarWrapper>
      {ClassButtonList.map((item: StateBtnType) => (
        <SelectItem
          key={item.id}
          item={item}
          selected={selected}
          selectedHandlerColor={selectedHandlerColor}
        />
      ))}
    </S.SelectBarWrapper>
  );
};

export default LocationBar;
