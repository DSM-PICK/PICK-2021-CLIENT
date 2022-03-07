import { FC } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SplashScreen from "../components/common/SplashScreen";
import MainPage from "../page";
import Calendar from "../page/Calendar";
import Login from "../page/Login";
import AttendanceInquiry from "../components/copyComponents/attendanceInquiry/AttendanceInquiry";
const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/atI" element={<AttendanceInquiry />} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
