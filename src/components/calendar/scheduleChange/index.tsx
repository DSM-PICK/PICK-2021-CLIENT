import { useRecoilState, useRecoilValue } from "recoil";
import { modal } from "../../../modules/atom/schedule";
import ScheduleItem from "./scheduleChange.tsx";
import TeacherItem from "./teacherChange";
import * as S from "./style";
import { date } from "../../../modules/atom/calendar";
import { DateChangeHook } from "../../../utils/hook/dateChangeHook";

const ChangeModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modal);
  const _date = useRecoilValue(date);

  return (
    <>
      <S.ChangeWrapper modalOpen={modalOpen}>
        <div className="title_wrap">
          <h1>일정 관리</h1>
          <span className="info_text">
            자습 감독 선생님과 해당 날의 자습 상태를 변경 할 수 있습니다.{" "}
          </span>
        </div>
        <span className="date">
          {DateChangeHook(_date.format("YYYY-MM-DD"))}
        </span>

        <TeacherItem />
        <ScheduleItem />
        <S.ButtonWrapper>
          <button onClick={() => setModalOpen(false)}>취소</button>
          <button onClick={() => setModalOpen(false)}>완료</button>
        </S.ButtonWrapper>
      </S.ChangeWrapper>
    </>
  );
};
export default ChangeModal;
