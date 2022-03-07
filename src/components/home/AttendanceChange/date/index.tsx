import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { attendanceData } from "../../../../modules/atom/attendance";
import {
  calendarEndModal,
  calendarModal,
  endDateValue,
  startDateValue,
} from "../../../../modules/atom/calendar";
import { DateNonYearHook } from "../../../../utils/hook/dateChangeHook";
import { DatePeriodChangeHook } from "../../../../utils/hook/datePeriodChangeHook";
import { DateSplitHook } from "../../../../utils/hook/dateSplitHook";
import CalendarEndModal from "./CalendarEndModal";
import CalendarModal from "./CalendarModal";
import * as S from "./style";

const CalendarItem = () => {
  const setOpen = useSetRecoilState(calendarModal);
  const setSecOpen = useSetRecoilState(calendarEndModal);
  const [attendance, setAttendance] = useRecoilState(attendanceData);
  const startDate = useRecoilValue(startDateValue);
  const endDate = useRecoilValue(endDateValue);
  const [dateValue, setDateValue] = useState<any>(DateSplitHook(startDate));
  const [dateSecValue, setDateSecValue] = useState<any>(DateSplitHook(endDate));

  const [date, setDate] = useState({
    startDate: startDate.format("YYYY-MM-DD"),
    endDate: endDate.format("YYYY-MM-DD"),
    startPeriod: "",
    endPeriod: "",
  });

  useEffect(() => {
    setDateValue(DateNonYearHook(startDate.format("M-D")));
    setDateSecValue(DateNonYearHook(endDate.format("M-D")));
  }, [date, startDate, dateValue, endDate]);

  useEffect(() => {
    setAttendance({
      ...attendance,
      term: DatePeriodChangeHook(date),
    });
  }, [date, attendance.term]);

  useEffect(() => {
    setDate({
      ...date,
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD"),
    });
  }, [startDate, endDate]);

  return (
    <>
      <CalendarModal />
      <CalendarEndModal />
      <EnrollmentItem>
        <S.SubTitle>날짜</S.SubTitle>
        <S.DateWrapper>
          <div className="date_item_wrap">
            <span onClick={() => setOpen(true)}>{dateValue}</span>
            <div className="date_period">
              <input
                type="text"
                placeholder="_"
                onChange={(e) =>
                  setDate({
                    ...date,
                    startPeriod: e.target.value,
                  })
                }
              />
              <span>교시 ~ </span>
            </div>
          </div>
          <div className="date_item_wrap">
            <span onClick={() => setSecOpen(true)}>{dateSecValue}</span>
            <div className="date_period">
              <input
                type="text"
                placeholder="_"
                onChange={(e) =>
                  setDate({
                    ...date,
                    endPeriod: e.target.value,
                  })
                }
              />
              <span>교시</span>
            </div>
          </div>
        </S.DateWrapper>
      </EnrollmentItem>
    </>
  );
};

const EnrollmentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .field-item {
    display: flex;
  }

  .react-datepicker-wrapper {
    width: auto;
  }

  .example-custom-input {
    background: white;
    border: none;
  }

  .text-input {
    border-bottom: 1px solid black;
    outline: none;
    border: none;
    text-align: center;
    font-size: 18px;
  }
`;

export default CalendarItem;
