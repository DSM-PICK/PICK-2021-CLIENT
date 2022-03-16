import { atom } from "recoil";

export const scheduleEditStatus = atom({
  key: "edit-status",
  default: false,
});

export const selectedIndex = atom({
  key: "index",
  default: 0,
})