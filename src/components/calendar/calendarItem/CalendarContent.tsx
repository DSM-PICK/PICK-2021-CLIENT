/* eslint-disable no-loop-func */
import moment from "moment";
import { useRecoilState } from "recoil";
import { date } from "../../../modules/atom/calendar";
import * as S from "./style";
// import "../../../index.css";
import { StateChangeHook } from "../../../utils/hook/stateChangeHook";
import { useQuery } from "react-query";
import schedule from "../../../utils/api/schedule/scheduleApi";
import { ScheduleListType } from "../../../utils/interface/schedule/schedule";
import { ScheduleTeacherType } from "../../../utils/interface/teacher";

const CalendarContent = () => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const week = ["월", "화", "수", "목", "금"];

  const handleDayClick = (current: moment.Moment) => setBaseDate(current);

  // 달별로 일정 리스트
  const { data: scheduleList } = useQuery(
    ["scehdule_list", baseDate.format("MM")],
    () =>
      schedule.getScheduleListMonth(
        baseDate.format("YYYY"),
        baseDate.format("MM")
      ),
    {
      enabled: !!baseDate.format("MM"),
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
    }
  );

  // 1. 달력의 스케줄이 있는 날짜는 일정이 표시됩니다.
  // 2. 달력을 그리고 데이터를 불러온다.
  // 3. 데이터의 날짜의 맞게 달력을 찍는다.

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
                today.format("YYYY-MM-DD") === current.format("YYYY-MM-DD")
                  ? "selected"
                  : "";

              let isGrayed =
                current.format("MM") !== today.format("MM") ? "grayed" : "";

              const _schedule = scheduleList?.data?.find(
                (schedule: ScheduleListType) =>
                  schedule.date === current.format("YYYY-MM-DD")
              );

              return (
                <S.BoxItem
                  className={`box ${isSelected} ${isGrayed}`}
                  key={i}
                  onClick={() => handleDayClick(current)}
                >
                  <div className="date_more">
                    <span>{current.format("D")}</span>
                    <span>{StateChangeHook(_schedule?.name)}</span>
                  </div>
                  <div className="teacher_list">
                    {_schedule?.director?.map(
                      (teacher: ScheduleTeacherType) => (
                        <span>{teacher.name}</span>
                      )
                    )}
                  </div>
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
    <S.CalendarWrap>
      <S.CalendarDate>{weekControll(week)}</S.CalendarDate>
      <S.ContentWrap>{generate()}</S.ContentWrap>
    </S.CalendarWrap>
  );
};

export default CalendarContent;
