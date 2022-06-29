import { useRecoilState, useRecoilValue } from "recoil";
import { modal } from "../../../../../modules/mobile/atom/schedule";
import * as S from "./style";
import { date } from "../../../../../modules/mobile/atom/calendar";
import { DateChangeHook } from "../../../../../utils/dateChangeHook";
import ScheduleChange from "./scheduleChange";
import TeacherChange from "./teacherChange";

const ChangeModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modal);
  const _date = useRecoilValue(date);

  return (
    <S.ChangeWrapper modalOpen={modalOpen} onClick={() => setModalOpen(false)}>
      <S.ChangeModalContainer
        modalOpen={modalOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title_wrap">
          <h1>일정 관리</h1>
          <span className="info_text">
            자습 감독 선생님과 해당 날의 자습 상태를 변경 할 수 있습니다.
          </span>
        </div>
        <span className="date">
          {DateChangeHook(_date.format("YYYY-MM-DD"))}
        </span>
        <TeacherChange />
        <ScheduleChange />
        <S.ButtonWrapper>
          <button onClick={() => setModalOpen(false)}>완료</button>
        </S.ButtonWrapper>
      </S.ChangeModalContainer>
    </S.ChangeWrapper>
  );
};
export default ChangeModal;
