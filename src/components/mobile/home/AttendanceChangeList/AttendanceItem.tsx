import { DatePeriodHook } from "../../../../utils/dateChangeHook";
import { AttendanceListType } from "../../../../lib/interface/mobile/Attendance";
import * as S from "./style";

interface Props {
  modal: any;
  setModal: any;
  item: AttendanceListType;
}

const ListItem = ({ modal, setModal, item }: Props) => {
  //console.log(item);

  return (
    <S.StdListItem
      onClick={() =>
        setModal({
          modal: true,
          attendance_id: item.attendance_id,
          name: item.name,
          term: item.term,
        })
      }
    >
      <div className="std">
        <span>
          {item.gcn} {item.name}
        </span>
      </div>
      <span className="state">{item.state}</span>
      <span className="date">{DatePeriodHook(item.term)}</span>
      <span className="reason">{item.reason}</span>
      <span className="teacher">{item.teacher_name}</span>
    </S.StdListItem>
  );
};

export default ListItem;
