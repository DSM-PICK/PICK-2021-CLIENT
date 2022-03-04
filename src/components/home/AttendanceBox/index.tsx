import styled from "@emotion/styled";
import { MainBack } from "../../../utils/assets";

const AttendanceSelect = () => {
  return (
    <AttendanceSelectWrapper href="/attendance?floor=2&id=">
      <img src={MainBack} alt="" />
      <span>전공 동아리</span>
    </AttendanceSelectWrapper>
  );
};

export default AttendanceSelect;

export const AttendanceSelectWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 10px #e5e5e5;
  }
  span {
    position: absolute;
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;
