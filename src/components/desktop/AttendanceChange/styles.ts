import styled from "@emotion/styled";
import { COLOR } from "../../../style/color";

export const AttendanceChangeColumn = styled.div`
  width: 300px;
`;

export const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const AttendanceAddBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RowDivider = styled.div`
  width: 2px;
  background-color: #eeeeee;
  margin: 0 50px;
`;

export const ColumnDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eeeeee;
  margin: 45px 0;
`;

export const AttendanceAddContainer = styled.div`
  display: flex;
  position: relative;
  height: 200px;
`;

export const AttendanceAddWrapper = styled.div`
  /* margin-bottom: 80px; */
`;

export const AddButton = styled.button<{ display: string }>`
  position: absolute;
  background-color: ${COLOR.orange};
  color: ${COLOR.white};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  font-size: 17px;
  padding: 6px 15px;
`;

export const ErrorMessage = styled.div<{ display: string }>`
  position: absolute;
  width: fit-content;
  color: red;
  text-align: center;
  font-size: 16px;
  display: ${(props) => props.display};
  bottom: 0;
  right: 0;
  transform: translate(-77%, -50%);
`;

export const AttendanceChangeListHeader = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 35% 13% 13% 13% 25%;
  border-bottom: 1px solid #eeeeee;
`;

export const AttendanceChangeListBody = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  height: 300px;
  width: 100%;
  overflow: auto;
  font-size: 15px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const AttendanceChangeNavBar = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 32px;
`;

export const AttendanceChangeNav = styled.div<{ color: string }>`
  font-size: 18px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

export const AttendanceChangeListHead = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9f9f9f;
`;

export const AttendanceChangeListContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0px 2px 13px rgba(166, 166, 166, 0.25);
  padding: 0 45px;
`;

export const PleaseAddContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const PleaseAddStudentsFirstIMG = styled.div`
  background-image: url("https://dsm-pick.com/35d2f41cb57b71facffb0f28ee161641.gif");
  background-repeat: no-repeat;
  width: 100%;
`;

export const PleaseAddStudentsFirstText = styled.div`
  font-size: 18px;
  width: max-content;
  position: absolute;
  left: 100%;
  transform: translateX(-100%);
  color: #555555;
`;
