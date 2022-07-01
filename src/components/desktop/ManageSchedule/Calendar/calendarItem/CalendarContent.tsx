import moment from "moment";
import { useRecoilState } from "recoil";
import { date } from "../../../../../modules/mobile/atom/calendar";
import * as S from "./style";
import { StateChangeHook } from "../../../../../utils/stateChangeHook";
import { ScheduleListType } from "../../../../../lib/interface/mobile/schedule/schedule";
import { ScheduleTeacherType } from "../../../../../lib/interface/mobile/teacher";
import { FC } from "react";
import { AxiosResponse } from "axios";

interface Props {
  scheduleList: AxiosResponse<any, any> | undefined;
}

const CalendarContent: FC<Props> = ({ scheduleList }) => {
  const [baseDate, setBaseDate] = useRecoilState(date);
  const week = ["월", "화", "수", "목", "금"];

  const handleDayClick = (current: moment.Moment) => setBaseDate(current);

  function generate() {
    const today = baseDate;
    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

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
                today.format("YYYY-MM-DD") === current.format("YYYY-MM-DD") ? "selected" : "";

              let isGrayed = current.format("MM") !== today.format("MM") ? "grayed" : "";

              const _schedule = scheduleList?.data?.find(
                (schedule: ScheduleListType) => schedule.date === current.format("YYYY-MM-DD")
              );

              console.log(_schedule, scheduleList);

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
                  <S.TeacherList>
                    {_schedule?.director?.map((teacher: ScheduleTeacherType, index: number) => (
                      <S.TeacherInformation
                        key={`${baseDate}${teacher.teacher_id}${index}`}
                        gridStart={teacher.floor - 1}
                        gridEnd={teacher.floor}
                      >
                        {`${teacher.floor}층 ${teacher.name ?? "왜에러"}`}
                      </S.TeacherInformation>
                    ))}
                  </S.TeacherList>
                </S.BoxItem>
              );
            })}
        </div>
      );
    }
    return calendar;
  }

  const weekControl = (week: string[]) => {
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
      <S.CalendarDate>{weekControl(week)}</S.CalendarDate>
      <S.ContentWrap>{generate()}</S.ContentWrap>
    </S.CalendarWrap>
  );
};

export default CalendarContent;
