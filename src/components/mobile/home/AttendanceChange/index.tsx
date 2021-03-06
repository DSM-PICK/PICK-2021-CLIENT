import styled from "@emotion/styled";
import StateItem from "./state";
import CalendarItem from "./date";
import NameItem from "./name";
import ReasonItem from "./reason";
import EnrollmentHistory from "./historyList";
import { BoxColor } from "../../../../style/color";
import SubTitle from "../../common/SubTitle";

const AttendanceChange = () => {
  return (
    <AttendanceChangeWrapper>
      <SubTitle title="학생출결변경사항등록" />
      <ChangeBox>
        <Enrollment>
          <StateItem />
          <CalendarItem />
          <NameItem />
          <ReasonItem />
        </Enrollment>
        {/*  출결 등록 리스트 */}
        <EnrollmentHistory />
      </ChangeBox>
    </AttendanceChangeWrapper>
  );
};

const AttendanceChangeWrapper = styled.section`
  margin: 8% 0;
  width: 100%;
  height: 100%;
`;

const ChangeBox = styled.div`
  padding: 3%;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: ${BoxColor};
  border: 1px solid #efefef;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(210, 210, 210, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Enrollment = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AttendanceChange;
