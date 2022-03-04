import { atom } from "recoil";

export const teacherId = atom<string>({
  key: "teacher",
  default: "",
});
