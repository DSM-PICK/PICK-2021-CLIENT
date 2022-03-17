import CalendarChangeBtn from "./calendarItem/CalendarChangeBtn";
import CalendarContent from "./calendarItem/CalendarContent";
import CalendarHead from "./calendarItem/CalendarHead";
import styled from "@emotion/styled";
import ChangeModal from "./scheduleChange";

const Calendar = () => {
  return (
    <>
      <ChangeModal />
      <Container>
        <CalendarHead />
        <CalendarContent />
        <CalendarChangeBtn />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default Calendar;
