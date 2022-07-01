import CalendarChangeBtn from "./calendarItem/CalendarChangeBtn";
import CalendarContent from "./calendarItem/CalendarContent";
import CalendarHead from "./calendarItem/CalendarHead";
import styled from "@emotion/styled";
import ChangeModal from "./scheduleChange";
import { useQuery } from "react-query";
import { date } from "../../../../modules/mobile/atom/calendar";
import { useRecoilValue } from "recoil";
import scheduleApi from "../../../../lib/api/mobile/schedule/scheduleApi";

const Calendar = () => {
  const baseDate = useRecoilValue(date);
  const { data: scheduleList, refetch: refetchScheduleList } = useQuery(
    ["schedule_list", baseDate.format("MM")],
    () => scheduleApi.getScheduleListMonth(baseDate.format("YYYY"), baseDate.format("MM")),
    {
      suspense: false,
    }
  );
  return (
    <>
      <ChangeModal refetchScheduleList={refetchScheduleList} />
      <Container>
        <CalendarHead />
        <CalendarContent scheduleList={scheduleList} />
        <CalendarChangeBtn />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default Calendar;
