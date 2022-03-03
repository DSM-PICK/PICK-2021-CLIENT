import { FC } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Attendance from "../components/attendance/index";

const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
