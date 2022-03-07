import { FC } from "react";
import AttendanceCheck from "../../../components/desktop/AttendanceCheck/AttendanceCheck";
import Header from "../../../components/desktop/Header/Header";

const AttendanceCheckPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <AttendanceCheck />
    </>
  );
};

export default AttendanceCheckPage;
