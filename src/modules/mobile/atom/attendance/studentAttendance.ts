import { atom } from "recoil";

export const checkList_atom = atom<any>({
  key: "checkList_atom",
  default: [],
});

export const selectValue_atom = atom({
  key: "selectValue_atom",
  default: [],
});
