import { useSetRecoilState } from "recoil";
import { modal } from "../../../modules/atom/schedule";
import * as S from "./style";

const CalendarChangeBtn = () => {
  const setModalOpen = useSetRecoilState(modal);

  return (
    <S.ChangeBtnWrap>
      <div className="item_center">
        일정 교체를 원하시면 일정 교체를 선택한 후
        <br /> 변경하실 일정을 선택해주세요.
      </div>
      <button onClick={() => setModalOpen(true)}>일정 교체</button>
    </S.ChangeBtnWrap>
  );
};

export default CalendarChangeBtn;
