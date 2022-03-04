import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { teacherInfoSelector } from "../../../modules/selector/teacher";
import { MainColor } from "../../../style/color";
import { teacherId } from "../../../utils/api/axios";

const Title = () => {
  const info = useRecoilValue(teacherInfoSelector(teacherId));

  return (
    <TitleBox>
      <span>{info?.name} 선생님은</span>
      <div className="title-item">
        <span>전공동아리</span>
        <span>자습감독이십니다.</span>
      </div>
    </TitleBox>
  );
};

export default Title;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  margin: 60px 0px;

  span {
    font-weight: bold;
  }

  .title-item {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    span:nth-of-type(1) {
      font-weight: 800;
      color: ${MainColor};
      margin-right: 10px;
    }
  }
`;
