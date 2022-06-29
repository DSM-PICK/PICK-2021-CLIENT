import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { scheduleDateSelector } from "../../../../modules/mobile/selector/schedule";
import { MainColor } from "../../../../style/color";
import moment from "moment";
import { StateChangeHook } from "../../../../utils/stateChangeHook";
import { useQuery } from "react-query";
import request from "../../../../lib/api/mobile/axios";

const Title = () => {
  const schedule = useRecoilValue(
    scheduleDateSelector(moment().format("YYYY-MM-DD"))
  );

  const { data: teacherInfo } = useQuery(
    ["teacher_info", localStorage.getItem("teacher_id")],
    () => request(`/teacher/${localStorage.getItem("teacher_id")}/information`),
    {
      enabled: !!localStorage.getItem("teacher_id"),
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return (
    <TitleBox>
      <span>{teacherInfo?.data?.name} 선생님은</span>
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
