import styled from "@emotion/styled";
import Footer from "../../components/mobile/common/header/Footer";
import Header from "../../components/mobile/common/header/Header";
import Title from "../../components/mobile/common/Title";
import AttendanceSelect from "../../components/mobile/home/AttendanceBox";
import AttendanceChange from "../../components/mobile/home/AttendanceChange";
import AttendanceChangeList from "../../components/mobile/home/AttendanceChangeList";

const MainPage = () => {
  return (
    <MainWrapper>
      <Header />
      <Container>
        <Title />
        <AttendanceSelect />
        <AttendanceChange />
        <AttendanceChangeList />
      </Container>
      <Footer />
    </MainWrapper>
  );
};

export default MainPage;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: 10% 7%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  canvas {
    position: absolute;
    border: 1px solid;
  }
`;
