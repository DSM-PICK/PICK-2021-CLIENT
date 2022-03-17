import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  LoginPage,
  ManageSchedulePage,
  AttendanceCheckPage,
  AttendanceChangePage,
  StudentListPage,
  AtcheckPage,
  PasswordPage,
} from "../page/desktop";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AttendanceChangePage />} />
        <Route path="/home" element={<AttendanceChangePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/schedule" element={<ManageSchedulePage />} />
        <Route path="/studentlist" element={<StudentListPage />} />
        <Route path="/atview" element={<AttendanceCheckPage />} />
        <Route path="/atcheck" element={<AtcheckPage />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
