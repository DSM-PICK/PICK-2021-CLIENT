import styled from "@emotion/styled";
import Footer from "../components/common/header/Footer";
import Header from "../components/common/header/Header";
import Title from "../components/common/Title";
import AttendanceSelect from "../components/home/AttendanceBox";
import AttendanceChange from "../components/home/AttendanceChange";
import AttendanceChangeList from "../components/home/AttendanceChangeList";

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
  width: 100%;
  height: 83%;
  margin: 0 auto;
  overflow: auto;
  padding: 0 7%;
  box-sizing: border-box;

  canvas {
    position: absolute;
    border: 1px solid;
  }
`;
