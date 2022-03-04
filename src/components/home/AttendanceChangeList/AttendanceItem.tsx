import { DatePeriodHook } from "../../../utils/hook/dateChangeHook";
import { AttendanceType } from "../../../utils/interface/Attendance";
import * as S from "./style";

interface Props {
  modal: boolean;
  setModal: any;
  item: AttendanceType;
}

const ListItem = ({ modal, setModal, item }: Props) => {
  return (
    <>
      <S.StdListItem onClick={() => setModal(!modal)}>
        <div className="std">
          <span></span>
        </div>
        <span className="state">{item.state}</span>
        <span className="date">{DatePeriodHook(item.term)}</span>
        <span className="reason">{item.reason}</span>
        <span className="teacher">{item.teacher_id}</span>
      </S.StdListItem>
    </>
  );
};

export default ListItem;
