import { DatePeriodHook } from "../../../../utils/dateChangeHook";
import { AttendanceType } from "../../../../lib/interface/mobile/Attendance";
import * as S from "./style";

interface Props {
  modal: any;
  setModal: any;
  item: AttendanceType;
}

const ListItem = ({ modal, setModal, item }: Props) => {
  return (
    <S.StdListItem
      onClick={() =>
        setModal({ modal: true, attendance_id: item.attendance_id })
      }
    >
      <div className="std">
        <span>
          {item.gcn}
          {item.name}
        </span>
      </div>
      <span className="state">{item.state}</span>
      <span className="date">{DatePeriodHook(item.term)}</span>
      <span className="reason">{item.reason}</span>
      <span className="teacher">{item.teacher_id}</span>
    </S.StdListItem>
  );
};

export default ListItem;
