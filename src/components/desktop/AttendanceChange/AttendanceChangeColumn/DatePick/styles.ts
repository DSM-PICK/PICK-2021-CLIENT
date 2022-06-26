import styled from "@emotion/styled";
import { COLOR } from "../../../../../style/color";

export const DateBox = styled.div`
  display: flex;
  width: 100%;

  span {
    margin: 0 10px;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;

  & .classContainer {
    display: flex;
  }
`;

export const DateText = styled.div`
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  width: auto;
`;

export const ClassInput = styled.input`
  width: 20px;
  text-align: center;
  outline: none;
  border: none;
  font-size: 16px;
  border-bottom: 1px solid ${COLOR.black};
`;
