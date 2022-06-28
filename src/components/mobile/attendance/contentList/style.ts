import styled from "@emotion/styled";
import { MainColor } from "../../../../style/color";

interface Props {
  check?: boolean;
  stateSelect?: boolean;
  state?: string;
}

export const StudentList = styled.section`
  width: 100%;
  margin-top: 25px;

  .sub-header {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${MainColor};
    padding-bottom: 15px;

    li {
      font-size: 18px;
      text-align: center;
    }

    li:nth-of-type(1) {
      width: 10%;
    }
    li:nth-of-type(2),
    li:nth-of-type(3) {
      width: 15%;
    }
    li:nth-of-type(4),
    li:nth-of-type(5),
    li:nth-of-type(6) {
      width: 20%;
    }
  }

  .count {
    font-size: 18px;
  }
`;

export const StudentItem = styled.ul<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin: 15px 0;
  width: 100%;
  height: 30px;

  .checkbox {
    width: 10%;
    display: flex;
    justify-content: center;

    div {
      height: 25px;
      width: 25px;
      border: 1px solid #c7c7c7;
      border-radius: 5px;
      background-color: ${({ check }) => (check ? `${MainColor}` : "")};
    }
  }

  span {
    width: 15%;
  }

  .state-wrapper {
    width: 17%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 10px;
  }

  .state {
    padding: 5px 0;
    box-sizing: border-box;
    font-size: 17px;
    width: 100%;
    height: 30px;
    background: #ffffff;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
  }
`;

export const None = styled.div`
  text-align: center;
  padding: 30px 0;
  font-size: 20px;
  color: gray;
`;

export const StateSelectWrapper = styled.ul<Props>`
  z-index: 2;
  position: absolute;
  top: 29px;
  width: 100%;
  background-color: white;
  border: 1px solid #c7c7c7;
  display: ${({ stateSelect }) => (stateSelect ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    font-size: 17px;
    margin: 8px 0;
  }
`;

export const StateWrapper = styled.div<Props>`
  width: 17%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 10px;

  .state {
    padding: 5px 0;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    background: ${({ state }) => (state === "" ? "white" : `${MainColor}`)};
    border: ${({ state }) => (state === "" ? "1px solid #c7c7c7" : "none")};
    border-radius: 5px;

    span {
      color: white;
    }
  }
`;
