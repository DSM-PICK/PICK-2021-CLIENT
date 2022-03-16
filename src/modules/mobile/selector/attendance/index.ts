import { selector } from "recoil";
import attendance from "../../../../lib/api/mobile/attendance";
import { AttendanceType } from "../../../../lib/interface/mobile/Attendance";

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
