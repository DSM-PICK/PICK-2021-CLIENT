// import * as S from "./styles";
import { FC, useEffect, useState } from "react";
// import { prevPointer, nextPointer } from "../../../assets";
// // import Day from "./Day/Day";
// import { data } from "../../../test/testData";
// import { getSchedules } from "../../../utils/api/Calendar";
// import Day from "./Day/Day";

interface Props {
  editStatus: boolean;
}

const Calendar: FC<Props> = ({ editStatus }): JSX.Element => {
  //   const date: Date = new Date();
  //   const [year, setYear] = useState<number>(date.getFullYear());
  //   const [month, setMonth] = useState<number>(date.getMonth());
  //   // const totalMonthLength = new Array(42);
  //   // for(let i = 0; i < totalMonthLength.length; i++) {
  //   //   totalMonthLength.push(i + 1)
  //   // }
  //   const [TData, setTData] = useState<Array<string>>(data);
  //   const [NData, setNData] = useState<Array<string>>([]);
  //   const week: Array<string> = ["일", "월", "화", "수", "목", "금", "토"];
  //   const Today: string = `${date.getFullYear()}-${
  //     date.getMonth() + 1
  //   }-${date.getDate()}`;
  //   const dummyData = {
  //     date: "",
  //     name: "",
  //     period: "",
  //     director: [
  //       { name: "", teacher_id: "", floor: "" },
  //       { name: "", teacher_id: "", floor: "" },
  //       { name: "", teacher_id: "", floor: "" },
  //     ],
  //   };
  //   const addDummyData = (year: number, month: number) => {
  //     const dateLength: number = new Date(year, month + 1, 0).getDate();
  //     const newDate: number = new Date(year, month).getDay();
  //     let DummyFirst = [];
  //     let DummySecond = [];
  //     let newDateArray: any = [];
  //     for (let i = 0; i < newDate - 1; i++) {
  //       DummyFirst.push(dummyData);
  //     }
  //     for (let j = 0; j < dateLength - 1 - (newDate - 1 + TData.length); j++) {
  //       DummySecond.push(dummyData);
  //     }
  //     newDateArray = [...DummyFirst, ...TData, ...DummySecond];
  //     setNData(newDateArray);
  //   };
  //   const nextMonth = () => {
  //     setMonth(month + 1);
  //     if (month >= 11) {
  //       setMonth(0);
  //       setYear(year + 1);
  //     }
  //   };
  //   const todayDate = () => {
  //     setYear(date.getFullYear());
  //     setMonth(date.getMonth());
  //   };
  //   const prevMonth = () => {
  //     setMonth(month - 1);
  //     if (month < 1) {
  //       setMonth(11);
  //       setYear(year - 1);
  //     }
  //   };
  //   useEffect(() => {
  //     addDummyData(year, month);
  //   }, []);
  //   useEffect(() => {
  //     getSchedules(year, month).then((res: any) => {
  //       console.log(res);
  //     });
  //   }, [month]);
  //   return (
  //     <S.Container>
  //       <S.CalendarHeader>
  //         <S.Prev onClick={prevMonth}>
  //           <img src={prevPointer} />
  //         </S.Prev>
  //         <S.Date onClick={todayDate}>
  //           {year}년 {month + 1}월
  //         </S.Date>
  //         <div style={{ display: "flex" }}>
  //           <S.ChooseDateAlert
  //             style={editStatus ? { display: "block" } : { display: "none" }}
  //           >
  //             날짜를 선택해주세요
  //           </S.ChooseDateAlert>
  //           <S.Next onClick={nextMonth}>
  //             <img src={nextPointer} />
  //           </S.Next>
  //         </div>
  //       </S.CalendarHeader>
  //       <S.CalendarContainer>
  //         <S.WeekContainer>
  //           {week.map((week: any, index: number) => {
  //             return <S.WeekDays key={index}>{week}</S.WeekDays>;
  //           })}
  //         </S.WeekContainer>
  //         <S.DayContainer>
  //           {NData.map((value: any, index: number) => {
  //             return (
  //               <Day
  //                 key={index}
  //                 fullDate={value.date}
  //                 dayType={value.name}
  //                 floor2={value.director[0].name}
  //                 floor3={value.director[1].name}
  //                 floor4={value.director[1].name}
  //                 Today={Today}
  //                 month={month}
  //                 year={year}
  //                 index={index}
  //               />
  //             );
  //           })}
  //           {/* {totalMonthLength.map((_, index) => {
  //             return (
  //               <Day
  //                 key={index}
  //                 fullDate={"value.date"}
  //                 dayType={"value.name"}
  //                 floor2={`${index}`}
  //                 floor3={"value.director[1].name"}
  //                 floor4={"value.director[1].name"}
  //                 Today={"Today"}
  //                 month={index}
  //                 year={index}
  //                 index={index}
  //               />
  //             );
  //           })} */}
  //         </S.DayContainer>
  //       </S.CalendarContainer>
  //     </S.Container>
  //   );
  return <div>dd</div>;
};

export default Calendar;
