import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FloorBtnList,
  StateBtnType,
} from "../../../../lib/interface/mobile/Attendance/StateBtnType";
import { LocationType } from "../../../../lib/interface/mobile/location";
import SelectItem from "./SelectItem";
import { SelectBarWrapper } from "./style";

const LocationFloorBar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number>(2);

  const selectedHandlerColor = (item: LocationType) => {
    localStorage.setItem("locationId", String(item?.id));
    setSelected(item.id);
  };

  useEffect(() => {
    navigate(`/attendance?floor=${selected}&id=1`);
  }, [navigate, selected]);

  return (
    <SelectBarWrapper>
      {FloorBtnList.map((item: StateBtnType) => (
        <SelectItem
          key={item.id}
          item={item}
          selected={selected}
          selectedHandlerColor={selectedHandlerColor}
        />
      ))}
    </SelectBarWrapper>
  );
};

export default LocationFloorBar;
