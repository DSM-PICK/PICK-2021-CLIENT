/* eslint-disable import/no-anonymous-default-export */
import { MoveModalType } from "../../../../modules/mobile/atom/attendance";
import { AttendancePostType } from "../../../interface/mobile/Attendance";
import request from "../axios";

export default {
  getAttendance(floor: number) {
    return request({
      url: `/attendance/today?floor=${floor}`,
    });
  },
  deleteAttendance(id: number) {
    return request({
      url: `/attendance/${id}`,
      method: "delete",
    });
  },

  postAttendance(data: AttendancePostType) {
    console.log(data);
    return request({
      url: "/attendance",
      method: "post",
      data: {
        end_date: data.end_date,
        end_period: data.end_period,
        reason: data.reason,
        start_date: data.start_date,
        start_period: data.start_period,
        student_id: data.student_id,
        state: data.state,
        location_id: data.location_id,
        teacher_id: localStorage.getItem("teacher_id"),
      },
    });
  },
  patchAttendance(data: MoveModalType) {
    return request({
      url: "/attendance",
      method: "patch",
      data: {
        attendance_id: data.attendance_id,
        state: data.state,
        student_id: data.student_id,
        period: data.period,
        location_id: data.location_id,
      },
    });
  },
  getAttendanceList(location_id: number) {
    return request({
      url: `/attendance/${location_id}`,
    });
  },
};
