import { FC } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Attendance from "../components/mobile/attendance/Attendance";
import SplashScreen from "../components/mobile/common/SplashScreen";
import MainPage from "../page/mobile";
import Calendar from "../page/mobile/Calendar";
import Login from "../page/mobile/Login";

const MobileRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MobileRouter;
