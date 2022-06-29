import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { Prev, Next } from "../../../../assets";
import { getSchedule } from "../../../../lib/api/desktop/GetSchedule";
import { StateChangeHook } from "../../../../utils/stateChangeHook";
import { useRecoilState } from "recoil";
import {
  afterSchoolDay,
  afterSchoolStatus,
} from "../../../../modules/desktop/atom/AfterSchool";

const Calendar: FC = (): JSX.Element => {
  const date: Date = new Date();
  const [today, setToday] = useState("");
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [afterSchool, setAfterSchool] = useRecoilState(afterSchoolStatus);
  const [todayInRecoil, setTodayInRecoil] = useRecoilState(afterSchoolDay);
  const week: Array<string> = ["월", "화", "수", "목", "금"];
  const DayContainer: MutableRefObject<any> = useRef();

  useEffect(() => {
    const makeCalendar = (year: number, month: number) => {
      const dateLength: number = new Date(year, month + 1, 0).getDate();
      const newDate: number = new Date(year, month).getDay();
      for (let i = newDate; i < dateLength + newDate; i++) {
        const div = document.createElement("div");
        div.innerHTML = `${i - (newDate - 1)}`;
        if (`${year}-${month + 1}-${div.innerHTML}` === today) {
          div.style.backgroundColor = "#ff6e04";
          div.style.width = "30px";
          div.style.height = "30px";
          div.style.borderRadius = "100%";
          div.style.cursor = "pointer";
          div.style.fontSize = "15px";
          div.style.color = "white";
        }
        DayContainer.current.childNodes[i].insertBefore(div, null);
      }
    };
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month);
  }, [today, month, year]);

  const renderDay = () => {
    //달력 칸 42개 렌더링하기
    const dayArray = [];
    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} onClick={onClick} />);
    }
    return dayArray;
  };

  const nextMonth = () => {
    setMonth(month + 1);
    if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const todayDate = () => {
    setYear(date.getFullYear());
    setMonth(date.getMonth());
  };

  const prevMonth = () => {
    setMonth(month - 1);
    if (month < 1) {
      setMonth(11);
      setYear(year - 1);
    }
  };
  const onClick = (e: any) => {
    const date = e.target.childNodes[0]?.data;
    const getMonth = Number(month) + 1 < 10 ? `0${month + 1}` : month + 1;
    const getDate = date < 10 ? `0${date}` : date;
    const theDay = year + "-" + getMonth + "-" + getDate;

    getSchedule(theDay)
      .then((res) => {
        setAfterSchool(StateChangeHook(res.data.name));
        setTodayInRecoil({ day: theDay, period: res.data.period });
        setToday(year + "-" + String(Number(month) + 1) + "-" + date);
      })
      .catch(() => {
        setToday(year + "-" + String(Number(month) + 1) + "-" + date);
        alert("당일의 데이터가 없습니다.");
        setTodayInRecoil({ day: "", period: 0 });
      });
  };
  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Prev onClick={prevMonth}>
          <img src={Prev} alt="" />
        </S.Prev>
        <S.Date onClick={todayDate}>
          {year}년 {month + 1}월
        </S.Date>
        <S.Next onClick={nextMonth}>
          <img src={Next} alt="" />
        </S.Next>
      </S.CalendarHeader>
      <S.CalendarContainer>
        <S.WeekContainer>
          {week.map((week: string, index: number) => {
            return <S.WeekDays key={index}>{week}</S.WeekDays>;
          })}
        </S.WeekContainer>
        <S.DayContainer ref={DayContainer}>{renderDay()}</S.DayContainer>
      </S.CalendarContainer>
    </S.Container>
  );
};

export default Calendar;
