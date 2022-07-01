import moment from "moment";
import { atom } from "recoil";
import { AttendancePostType } from "../../../../lib/interface/mobile/Attendance";

export interface MoveModalType {
  open: boolean;
  gcn: string;
  student_id: number | null;
  name: string | null;
  period: number;
  attendance_id: number | undefined;
  location_id: number | undefined;
  state: string;
}

export const moveModal = atom<MoveModalType>({
  key: "moveModal",
  default: {} as MoveModalType,
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
    location_id: 1,
    teacher_id: localStorage.getItem("teacher_id"),
    student_id: null,
    state: "외출",
    start_date: moment().format("YYYY-MM-DD"),
    start_period: null,
    end_date: moment().format("YYYY-MM-DD"),
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
