import * as S from "./styles";
import { FC, MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Prev, Next } from "../../../assets";
import { COLOR } from "../../../style/color";
import {
  FModal,
  FDateValue,
  SDateValue,
  SModal,
  StudentObject,
  SelectedIndex,
} from "../../../modules/desktop/atom/ATChange";
import { CModal, CDateValue } from "../../../modules/desktop/atom/ATCheck";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { StudentObjectType } from "../../../lib/interface/desktop/AttendanceChange";

interface Props {
  isOpen: boolean;
  index: number;
}

const Calendar: FC<Props> = ({ isOpen, index }): JSX.Element => {
  const date: Date = new Date();
  const Today: string = `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
  const [year, setYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const week: Array<string> = ["월", "화", "수", "목", "금"];
  const DayContainer: MutableRefObject<any> = useRef();
  const setFDate = useSetRecoilState(FDateValue);
  const setFOpen = useSetRecoilState(FModal);
  const setSDate = useSetRecoilState(SDateValue);
  const setSOpen = useSetRecoilState(SModal);
  const setCDate = useSetRecoilState(CDateValue);
  const setCOpen = useSetRecoilState(CModal);
  const [studentObject, setStudentObject] = useRecoilState(StudentObject);
  const selectedId = useRecoilValue(SelectedIndex);
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    setCount(selectedId);
  }, [selectedId]);

  useEffect(() => {
    for (let i = 0; i < 41; i++) {
      if (DayContainer.current.childNodes[i].children.length >= 1) {
        DayContainer.current.childNodes[i].firstChild.remove();
      }
    }
    makeCalendar(year, month, count);
  }, [month, count]);

  const makeCalendar = (year: number, month: number, count: any) => {
    const dateLength: number = new Date(year, month + 1, 0).getDate();
    const newDate: number = new Date(year, month).getDay();
    for (let i = newDate; i < dateLength + newDate; i++) {
      const div = document.createElement("div");
      div.innerHTML = `${i - (newDate - 1)}`;
      if (`${year}-${month + 1}-${div.innerHTML}` === Today) {
        div.style.color = `${COLOR.orange}`;
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.borderRadius = "100%";
        div.style.cursor = "pointer";
        div.style.fontSize = "15px";
      }
      DayContainer.current.childNodes[i].insertBefore(div, null);
      div.onclick = function (e) {
        selectCalendar(e, count);
      };
    }
  };

  const renderDay = () => {
    const dayArray = [];
    for (let i = 1; i <= 42; i++) {
      dayArray.push(<S.Days key={i} />);
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

  const selectCalendar = (e: any, count: any) => {
    if (studentObject.length === 0) return;
    const selectDate = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
      e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML
    }`;
    if (index === 0) {
      setStudentObject(
        studentObject.length === 0
          ? studentObject
          : (prevArr: StudentObjectType[]) =>
              prevArr.map((value: StudentObjectType) => {
                return value.id === count ? { ...value, start_date: selectDate } : value;
              })
      );
      setFDate(selectDate);
      setFOpen(false);
    } else if (index === 1) {
      setStudentObject(
        studentObject.length === 0
          ? studentObject
          : (prevArr: StudentObjectType[]) =>
              prevArr.map((value: StudentObjectType) => {
                return value.id === count ? { ...value, end_date: selectDate } : value;
              })
      );
      setSDate(selectDate);
      setSOpen(false);
    } else if (index === 2) {
      setCDate(selectDate);
      setCOpen(false);
    }
  };

  return (
    <S.Container display={isOpen ? "block" : "none"}>
      <S.CalendarHeader>
        <S.Prev onClick={prevMonth}>
          <img src={Prev} />
        </S.Prev>
        <S.Date onClick={todayDate}>
          {year}년 {month + 1}월
        </S.Date>
        <S.Next onClick={nextMonth}>
          <img src={Next} />
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
