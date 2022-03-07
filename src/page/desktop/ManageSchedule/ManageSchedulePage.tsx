import { FC } from "react";
import ManageSchedule from "../../../components/desktop/ManageSchedule/ManageSchedule";
import Header from "../../../components/desktop/Header/Header";

const ManageSchedulePage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <ManageSchedule />
    </>
  );
};

export default ManageSchedulePage;
