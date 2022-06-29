import { FC } from "react";
import Header from "../../../components/desktop/Header/Header";
import Calendar from "../../../components/desktop/ManageSchedule/Calendar";

const ManageSchedulePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Calendar />
    </>
  );
};

export default ManageSchedulePage;
