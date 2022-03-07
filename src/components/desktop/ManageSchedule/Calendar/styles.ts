import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color";

export const Container = styled.div`
  min-width: 900px;
`;

export const Date = styled.div`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;

export const CalendarHeader = styled.div`
  height: 33px;
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Prev = styled.div`
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 12px;
    height: 10px;
  }
`;

export const Next = styled.div`
  width: 38px;
  height: 38px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 12px;
    height: 10px;
  }
`;

export const ChooseDateAlert = styled.div`
  font-size: 18px;
  color: ${COLOR.red};
  position: absolute;
  transform: translateX(-110%);
  width: 160px;
  line-height: 30px;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const WeekContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const DayContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 100%;
`;

export const WeekDays = styled.div`
  text-align: center;
  line-height: 36px;

  &:first-child {
    color: #ff453a;
    display: none;
  }

  &:last-child {
    display: none;
  }
`;

export const Days = styled.div`
  text-align: left;
  border-top: 1px solid #8e8e93;
  padding-top: 8px;
  padding-left: 8px;
  border: 1px solid #e5e5e5;
  &:nth-child(7n + 1) {
    display: none;
  }
  &:nth-child(7n) {
    display: none;
  }
`;
