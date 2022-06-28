import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { teacherId } from "../../../../constance";
import { teacherInfoSelector } from "../../../../modules/mobile/selector/teacher";
import { scheduleDateSelector } from "../../../../modules/mobile/selector/schedule";
import { MainColor } from "../../../../style/color";
import moment from "moment";
import { StateChangeHook } from "../../../../utils/stateChangeHook";

const Title = () => {
  const info = useRecoilValue(teacherInfoSelector(teacherId));
  const schedule = useRecoilValue(
    scheduleDateSelector(moment().format("YYYY-MM-DD"))
  );

  return (
    <TitleBox>
      <span>{info?.name} 선생님은</span>
      <div className="title-item">
        <span>{StateChangeHook(schedule.name)}</span>
        <span>감독이십니다.</span>
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
