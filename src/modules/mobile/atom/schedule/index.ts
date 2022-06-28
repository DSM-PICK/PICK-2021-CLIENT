import { atom } from "recoil";

export const modal = atom<boolean>({
  key: "modal",
  default: true,
});
