import styled from "@emotion/styled";
import { COLOR } from "../../../style/color";

export const Container = styled.div<{ display: string }>`
  width: 185px;
  position: absolute;
  background: ${COLOR.white};
  display: ${(props) => props.display};
  padding: 7px;
  border: 1px solid ${COLOR.gray};
  border-radius: 5px;
  transform: translateY(25px);
  z-index: 3;
`;

export const Date = styled.div`
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
`;

export const CalendarHeader = styled.div`
  height: 33px;
  width: 90%;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Prev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 17px;
    height: 17px;
  }
`;

export const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 17px;
    height: 17px;
  }
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
  column-gap: 10px;
`;

export const DayContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

export const WeekDays = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

export const Days = styled.div`
  height: 28px;
  border-radius: 10px;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  &:nth-child(7n + 1) {
    display: none;
  }
  &:nth-child(7n) {
    display: none;
  }
`;
