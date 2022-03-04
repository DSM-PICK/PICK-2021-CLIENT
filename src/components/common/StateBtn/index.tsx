import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { MainColor } from "../../../style/color";
import { attendanceData } from "../../../modules/atom/attendance";
import { StateBtnType } from "../../../utils/interface/Attendance/StateBtnType";

interface Props {
  item: StateBtnType;
  selected: number;
  selectedHandlerColor: any;
}

const StateBtn = (props: Props) => {
  const [attendance, setAttendance] = useRecoilState(attendanceData);

  const onChange = (field: string) => {
    setAttendance({
      ...attendance,
      state: field,
    });
  };

  return (
    <FieldButtonWrap
      onClick={() => {
        props.selectedHandlerColor(props.item);
        onChange(props.item.name);
      }}
      style={{
        background: props.item.id === props.selected ? `${MainColor}` : "",
        color: props.item.id === props.selected ? "white" : "black",
      }}
    >
      {props.item.name}
    </FieldButtonWrap>
  );
};

const FieldButtonWrap = styled.span`
  padding: 9px 15px;
  border-radius: 3px;
  font-size: 17px;
`;

export default StateBtn;
