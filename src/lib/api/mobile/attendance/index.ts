/* eslint-disable import/no-anonymous-default-export */
import moment from "moment";
import { AttendancePostType } from "../../../interface/mobile/Attendance";
import request from "../axios";

export default {
  getAttendance(floor: number) {
    const date = moment().format("YYYY-MM-DD");

    return request({
      url: `/attendance/today?floor=${floor}&date=${"2022-04-06"}`,
    });
  },
  deleteAttendance(id: number) {
    return request({
      url: `/attendance/${id}`,
      method: "delete",
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
