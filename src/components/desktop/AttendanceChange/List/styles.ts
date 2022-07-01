import styled from "@emotion/styled";
import { COLOR } from "../../../../style/color";

export const ACListCells = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: default;
`;

export const ACListColumns = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 35% 13% 13% 13% 25%;
  position: relative;
  color: ${COLOR.black};
  border-radius: 3px;

  &:hover {
    transition: 0.2s;
    background-color: ${COLOR.grey};
  }
`;

export const ACListSettings = styled.div<{ opacity: number }>`
  width: 17px;
  height: 17px;
  position: absolute;
  right: 10px;
  transform: translateY(-50%);
  top: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
  z-index: 3;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  transition: 0.3s;

  div {
    border-radius: 50%;
    background-color: rgb(112, 112, 112);
    width: 4px;
    height: 4px;
  }

  &:hover {
    background-color: ${COLOR.lightGray};
    transition: 0.3s;
  }
`;

export const SettingModal = styled.div<{ display: string; opacity: number }>`
  position: absolute;
  width: 40px;
  height: 30px;
  right: 0;
  transform: translate(-85%, 45%);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 4px 4px 0px;
  display: ${(props) => props.display};
  /* grid-template-rows: repeat(2, 1fr); */
  z-index: 10;
  background-color: ${COLOR.white};
  opacity: ${(props) => props.opacity};
  transition: 0.3s;
`;

export const SettingSelection = styled.div<{ color: string }>`
  position: relative;
  color: ${(props) => props.color};
  font-size: 14px;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${COLOR.grey};
  }
`;
