import styled from "@emotion/styled";
import { MainColor } from "../../../../style/color";

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

    .selected {
      border: 2px solid ${MainColor};
      z-index: 2;
      box-sizing: border-box;
    }

    .grayed {
      span {
        color: #b5b5b5;
      }
    }
  }
`;

export const ChangeBtnWrap = styled.section`
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: flex-end;

  button {
    padding: 8px 15px;
    background: ${MainColor};
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
  }

  box-sizing: border-box;

  .item_center {
    text-align: center;
  }
`;

export const BoxItem = styled.div`
  width: calc(100% / 5);
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

  .teacher_list {
    margin: 5px 0;
    display: flex;
    flex-direction: column;

    span {
      padding: 0.1rem 0;
      box-sizing: border-box;
    }
  }
`;
