import { selector } from "recoil";
import attendance from "../../../utils/api/attendance";
import { AttendanceType } from "../../../utils/interface/Attendance";

export const attendanceSelector = selector<AttendanceType[]>({
  key: "attendanceSelector/get",
  get: async () => {
    try {
      const res = await attendance.getAttendance();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});
