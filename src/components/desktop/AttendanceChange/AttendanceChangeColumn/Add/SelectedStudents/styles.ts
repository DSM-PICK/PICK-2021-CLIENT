import styled from "@emotion/styled";
import { COLOR } from "../../../../../../style/color";

export const SelectedStudents = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 16px;
`;

export const Selected = styled.div<{ display: string }>`
  width: 5px;
  height: 5px;
  background-color: ${COLOR.orange};
  position: absolute;
  transform: translateX(-12px);
  display: ${(props) => props.display};
  border-radius: 100%;
`;

export const Delete = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  color: ${COLOR.red};
  font-size: 14px;
  margin-left: 6px;
`;
