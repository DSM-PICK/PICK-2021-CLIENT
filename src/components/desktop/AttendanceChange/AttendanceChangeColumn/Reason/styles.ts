import styled from "@emotion/styled";
import { COLOR } from "../../../../../style/color";

export const NoteInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #9a9a9a9a;
  color: #555555;
  height: 35px;

  &::placeholder {
    color: #9a9a9a9a;
  }
`;
