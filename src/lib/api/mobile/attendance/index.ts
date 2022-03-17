/* eslint-disable import/no-anonymous-default-export */
import { AttendancePostType } from "../../../interface/mobile/Attendance";
import request from "../axios";

const teacher_id = localStorage.getItem("teacher_id");

export default {
  getAttendance(floor: number) {
    return request({
      url: `/attendance?floor=${floor}`,
    });
  },
  deleteAttendance(id: number) {
    return request({
      url: "/attendance",
      method: "delete",
      data: { id },
    });
  },
  postAttendance(data: AttendancePostType[]) {
    console.log(data);
    return request({
      url: "/attendance",
      method: "post",
      data: data,
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
