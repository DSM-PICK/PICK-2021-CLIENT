import { atom } from "recoil";
import { AttendancePostType } from "../../../../lib/interface/mobile/Attendance";

export const moveModal = atom({
  key: "modal",
  default: {
    open: false,
    gcn: "",
    student_id: null,
    student_name: "",
  },
});

export const stateValue = atom({
  key: "state",
  default: "",
});

export const stateSelect = atom({
  key: "stateSelect",
  default: false,
});

export const selectCount = atom({
  key: "count",
  default: 0,
});

export const attendanceData = atom<AttendancePostType>({
  key: "attendance",
  default: {
    student_id: null,
    state: "외출",
    term: "",
    reason: "",
    name: "",
  },
});

export const attendanceDataList = atom<AttendancePostType[]>({
  key: "attendanceList",
  default: [],
});

export const floorData = atom<number | undefined>({
  key: "floorData",
  default: 2,
});
