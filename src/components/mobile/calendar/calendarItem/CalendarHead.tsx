import { useRecoilState } from "recoil";
import { date } from "../../../../modules/mobile/atom/calendar";
import * as S from "./style";

const CalendarHead = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);

  return (
    <S.TitleWrap>
      <button
        className="left-btn"
        onClick={() => setBaseDate(baseDate.clone().subtract(1, "month"))}
      >
        {"<"}
      </button>
      <div className="date">
        <span>{baseDate.format("MM월 DD일")}</span>
        <span>{baseDate.format("YYYY년")}</span>
      </div>
      <button
        className="rigth-btn"
        onClick={() => setBaseDate(baseDate.clone().add(1, "month"))}
      >
        {">"}
      </button>
    </S.TitleWrap>
  );
};

export default CalendarHead;
