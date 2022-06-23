/* eslint-disable import/no-anonymous-default-export */
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
  getAttendanceList(location_id: number) {
    return request({
      url: `/attendance/${location_id}`,
    });
  },
};
