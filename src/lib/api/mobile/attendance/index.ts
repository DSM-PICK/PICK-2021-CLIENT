/* eslint-disable import/no-anonymous-default-export */
import { AttendancePostType } from "../../../interface/mobile/Attendance";
import request from "../axios";

const teacher_id = localStorage.getItem("teacher_id");

export default {
  getAttendance() {
    return request({
      url: "/attendance",
    });
  },
  deleteAttendance(id: number) {
    return request({
      url: "/attendance",
      method: "delete",
      data: { id },
    });
  },
  postAttendance(data: AttendancePostType) {
    return request({
      url: "/attendance",
      method: "post",
      data: {
        teacher_id: teacher_id,
        student_id: data.student_id,
        state: data.state,
        term: data.term,
        reason: data.reason,
      },
    });
  },
  patchAttendanceState(state: string) {
    return request({
      url: "/attendance/state",
      method: "patch",
      data: { state },
    });
  },
};
