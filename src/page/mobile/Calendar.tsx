import { ToastContainer } from "react-toastify";
import styled from "@emotion/styled";
import Header from "../../components/mobile/common/header/Header";
import Footer from "../../components/mobile/common/header/Footer";
import CalendarHead from "../../components/mobile/calendar/calendarItem/CalendarHead";
import CalendarContent from "../../components/mobile/calendar/calendarItem/CalendarContent";
import CalendarChangeBtn from "../../components/mobile/calendar/calendarItem/CalendarChangeBtn";
import ChangeModal from "../../components/mobile/calendar/scheduleChange";

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
  position: fixed;
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
