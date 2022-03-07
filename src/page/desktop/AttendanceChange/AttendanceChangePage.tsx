import { FC } from "react";
import AttendanceChange from "../../../components/desktop/AttendanceChange";
import Header from "../../../components/desktop/Header/Header";

const AttendanceChagePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AttendanceChange />
    </>
  );
};

export default AttendanceChagePage;
