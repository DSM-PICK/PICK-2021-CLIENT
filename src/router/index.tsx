import { FC } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SplashScreen from "../components/common/SplashScreen";
import MainPage from "../page";
import Login from "../page/Login";

const Router: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
