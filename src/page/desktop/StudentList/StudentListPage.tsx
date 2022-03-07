import React, { FC } from "react";
import Header from "../../../components/desktop/Header/Header";
import StudentList from "../../../components/desktop/StudentList/StudentList";
const StudentListPage: FC = () => {
  return (
    <>
      <Header />
      <StudentList />
    </>
  );
};

export default StudentListPage;
