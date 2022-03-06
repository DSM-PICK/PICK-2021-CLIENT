import { ToastContainer } from "react-toastify";
import styled from "@emotion/styled";
import Header from "../components/common/header/Header";
import Footer from "../components/common/header/Footer";
import CalendarHead from "../components/calendar/calendarItem/CalendarHead";
import CalendarContent from "../components/calendar/calendarItem/CalendarContent";
import CalendarChangeBtn from "../components/calendar/calendarItem/CalendarChangeBtn";
import ChangeModal from "../components/calendar/scheduleChange";

const Calendar = () => {
  return (
    <CalendarWrap>
      <ToastContainer />
      <ChangeModal />
      <Header />
      <Container>
        <CalendarHead />
        <CalendarContent />
        <CalendarChangeBtn />
      </Container>
      <Footer />
    </CalendarWrap>
  );
};

export default Calendar;

const CalendarWrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: 16% 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
