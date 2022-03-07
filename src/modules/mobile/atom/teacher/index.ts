import { atom } from "recoil";

export const teacherId = atom<string | null>({
  key: "teacher",
  default: "",
});
