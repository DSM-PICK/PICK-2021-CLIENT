/* eslint-disable import/no-anonymous-default-export */
import { MoveModalType } from "../../../../modules/mobile/atom/attendance";
import { AttendancePostType } from "../../../interface/mobile/Attendance";
import request from "../axios";

interface AttendancePatchType {
  attendance_id: number;
  period: number;
  student_id: number;
  state: string;
  location_id: number; // state가 이동일 때 이동장소
}

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
      data: data,
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
