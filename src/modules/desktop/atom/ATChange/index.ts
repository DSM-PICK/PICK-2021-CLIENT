import { atom } from "recoil";
import { StudentObjectType } from "../../../../lib/interface/desktop/ATChange";
const date = new Date();

export const FModal = atom({
  key: "fopened",
  default: false,
});

export const SModal = atom({
  key: "sopened",
  default: false,
});

export const FDateValue = atom({
  key: "fdate",
  default: "",
});

export const SDateValue = atom({
  key: "sdate",
  default: "",
});

export const ReasonAtom = atom({
  key: "reason",
  default: "",
});

export const SClassValue = atom({
  key: "sclassvalue",
  default: "",
});

export const FClassValue = atom({
  key: "fclassvalue",
  default: "",
});

export const searchStatus = atom({
  key: "search",
  default: false,
});

export const searchedStudents = atom({
  key: "searched-students",
  default: [],
});

export const AttendanceChanges = atom({
  key: "attendance-change",
  default: [],
});

export const StudentObject = atom({
  key: "student",
  default: [] as StudentObjectType[],
});

export const SelectedIndex = atom({
  key: "selected-index",
  default: 0,
});

export const TypeIndex = atom({
  key: "type-atom",
  default: 0,
});

export const Today = atom({
  key: "today-atom",
  default: `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`,
});
