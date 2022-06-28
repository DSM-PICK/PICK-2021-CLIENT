import { StateBtnType } from "../../../../lib/interface/mobile/Attendance/StateBtnType";
import { LocationType } from "../../../../lib/interface/mobile/location";
import { MainColor } from "../../../../style/color";
import * as S from "./style";

interface Props {
  item: LocationType | StateBtnType;
  selected?: number;
  selectedHandlerColor?: any;
}

const SelectItem = ({ item, selected, selectedHandlerColor }: Props) => {
  const locationClickHandle = () => {
    selectedHandlerColor(item);
  };

  return (
    <S.SelectItem
      onClick={locationClickHandle}
      style={
        selected === item.id
          ? { backgroundColor: `${MainColor}`, color: "white" }
          : { backgroundColor: "", color: "black" }
      }
    >
      {item.name}
    </S.SelectItem>
  );
};

export default SelectItem;
