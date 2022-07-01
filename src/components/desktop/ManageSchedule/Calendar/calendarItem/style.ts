import styled from "@emotion/styled";
import { MainColor } from "../../../../../style/color";

export const TitleWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 700;

    & span:nth-of-type(1) {
      cursor: pointer;
    }

    & span:nth-of-type(2) {
      margin-top: 5px;
      font-size: 20px;
    }
  }

  & button {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #8080802b;
    background-color: none;
    cursor: pointer;
  }
`;

export const CalendarWrap = styled.section`
  margin-top: 20px;
  width: 100%;
  height: 83%;
`;

export const CalendarDate = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;

  li {
    width: calc(100% / 5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-wrap: flex-wrap;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;

    .selected {
      border: 2px solid ${MainColor};
      z-index: 2;
    }

    .grayed {
      span {
        color: #b5b5b5;
      }
    }
  }
`;

export const ChangeBtnWrap = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  box-sizing: border-box;

  button {
    padding: 8px 15px;
    background: ${MainColor};
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  .item_center {
    text-align: center;
    margin: 0 auto;
  }
`;

export const BoxItem = styled.div`
  width: calc(100% / 5);
  aspect-ratio: 2/1;
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #e5e5e5;

  :nth-of-type(5) {
    border: none;
  }

  .date_more {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TeacherList = styled.div`
  margin: 5px 0;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export const TeacherInformation = styled.span<{ gridStart: number; gridEnd: number }>`
  padding: 0.1rem 0;
  box-sizing: border-box;
  grid-row-start: ${(props) => props.gridStart};
  grid-row-end: ${(props) => props.gridEnd};
`;
