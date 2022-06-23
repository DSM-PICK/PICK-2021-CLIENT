import { atom } from "recoil";
import { AttendancePostType } from "../../../../lib/interface/mobile/Attendance";

export const moveModal = atom({
  key: "modal",
  default: {
    open: false,
    gcn: "",
    student_id: null,
    student_name: "",
    period: 8,
  },
});

export const nameInputAtom = atom({
  key: "nameInputAtom",
  default: "",
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
    teacher_id: localStorage.getItem("teacher_id"),
    student_id: null,
    state: "외출",
    start_date: "",
    start_period: null,
    end_date: "",
    end_period: null,
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
