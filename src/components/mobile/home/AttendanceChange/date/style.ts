import styled from "@emotion/styled";
import { MainColor } from "../../../../../style/color";

interface Props {
  open: boolean;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background: black;
  background: #0000003b;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const CalendarWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  padding: 15px;

  .content {
    display: flex;
  }
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

export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  padding: 9px 0;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .date_item_wrap {
    display: flex;
    flex-direction: row;

    span {
      margin-left: 5px;
      font-size: 17px;
    }

    .date_period {
      display: flex;
      flex-direction: row;

      & input {
        width: 25px;
        text-align: end;
        border: none;
        font-size: 18px;
      }
    }
  }
`;
