import styled from "@emotion/styled";
import { COLOR } from "../../../../../style/color";

export const AddStudentTitle = styled.div`
  font-size: 18px;
  color: #555555;
`;

export const SearchAbsentsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
`;

export const SearchStudentsInput = styled.input<{ display: string }>`
  width: 120px;
  height: 18px;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid #eeeeee;
  display: ${(props) => props.display};
  font-size: 14px;
  color: #555555;

  &::placeholder {
    color: #9a9a9a;
  }
`;

export const AddAbsents = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  color: #6b6b66;
  border: none;
  outline: none;
  padding: 5px 13px;
  border-radius: 20px;
  margin-left: 21px;
  margin-right: 15px;
`;

export const SearchedStudent = styled.div`
  color: #656565;
  width: max-content;
  font-size: 14px;
  margin: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchedBackground = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SearchedContainer = styled.div<{ display: string }>`
  max-height: 160px;
  width: fit-content;
  position: absolute;
  display: ${(props) => props.display};
  flex-direction: column;
  padding: 4px 18px;
  right: 0;
  top: 24px;
  background: ${COLOR.white};
  overflow: auto;
  border-radius: 15px;
  box-shadow: 0px 2px 7px rgba(137, 137, 137, 0.25);
  transform: translateX(5px);
`;

export const SearchedStudentWrapper = styled.div`
  position: relative;
`;

export const AddedStudentsContainer = styled.div`
  width: 130px;
  height: 180px;
  margin-top: 32px;
  padding: 0 0 0 16px;
  overflow: auto;
`;
