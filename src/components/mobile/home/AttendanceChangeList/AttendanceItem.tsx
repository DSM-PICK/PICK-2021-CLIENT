import moment from "moment";
import { AttendanceListType } from "../../../../lib/interface/mobile/Attendance";
import * as S from "./style";

interface Props {
  modal: any;
  setModal: any;
  item: AttendanceListType;
}

const ListItem = ({ modal, setModal, item }: Props) => {
  const date = moment().format("M월 D일");

  return (
    <S.StdListItem
      onClick={() =>
        setModal({
          ...modal,
          modal: true,
          attendance_id: item.id,
          name: item.name,
        })
      }
    >
      <div className="std">
        <span>
          {item.gcn} {item.name}
        </span>
      </div>
      <span className="state">{item.state}</span>
      <span className="date">
        {date} {item.period}교시 ~ {date} {item.period}교시
      </span>
      <span className="reason">{item.reason}</span>
      <span className="teacher">{item.teacher_name}</span>
    </S.StdListItem>
  );
};

export default ListItem;
