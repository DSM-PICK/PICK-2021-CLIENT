import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import { DefaultColor, MainColor } from "../../../style/color";
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
        background:
          props.item.id === props.selected ? `${MainColor}` : `${DefaultColor}`,
        color: props.item.id === props.selected ? "white" : "#6B6B6B",
      }}
    >
      {props.item.name}
    </FieldButtonWrap>
  );
};

const FieldButtonWrap = styled.span`
  padding: 10px 15px;
  border-radius: 20px;
  margin-left: 5px;
  filter: drop-shadow(0px 2px 5px rgba(153, 153, 153, 0.25));
`;

export default StateBtn;
