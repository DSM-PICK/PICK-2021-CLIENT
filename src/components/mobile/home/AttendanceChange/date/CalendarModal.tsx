/* eslint-disable no-loop-func */
import { useRecoilState, useResetRecoilState } from "recoil";
import { Close } from "../../../../../assets";
import {
  calendarModal,
  date,
  startDateValue,
} from "../../../../../modules/mobile/atom/calendar";
import CalendarHead from "../../../calendar/calendarItem/CalendarHead";
import * as S from "./style";

const CalendarModal = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const [open, setOpen] = useRecoilState(calendarModal);
  const [startDate, setStartDate] = useRecoilState(startDateValue);
  const resetDate = useResetRecoilState(date);
  const test = baseDate.format("YYYY-MM-DD");
  const week = ["월", "화", "수", "목", "금"];

  const handleDayClick = (current: moment.Moment) => {
    setBaseDate(current);
    setOpen(false);
    setStartDate(current);
  };

  function generate() {
    const today = baseDate;

    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();

    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="content" key={week}>
          {Array(5)
            .fill(2)
            .map((_n, i) => {
              let current = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(i + 1, "day");

              let isSelected =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";

              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              if (today.format("YYYY-MM-DD") === test) {
              }

              return (
                <S.BoxItem
                  className={`box ${isSelected} ${isGrayed}`}
                  key={i}
                  onClick={() => {
                    handleDayClick(current);
                    resetDate();
                  }}
                >
                  <span>{current.format("D")}</span>
                </S.BoxItem>
              );
            })}
        </div>
      );
    }
    return calendar;
  }

  const weekControll = (week: string[]) => {
    return (
      <>
        {week.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </>
    );
  };

  return (
    <S.Wrapper open={open}>
      <S.CalendarWrapper>
        <img
          src={Close}
          alt="닫기 버튼"
          id="close_btn"
          onClick={() => setOpen(false)}
        />
        <CalendarHead />
        <S.CalendarDate>{weekControll(week)}</S.CalendarDate>
        <S.ContentWrap>{generate()}</S.ContentWrap>
      </S.CalendarWrapper>
    </S.Wrapper>
  );
};

export default CalendarModal;
