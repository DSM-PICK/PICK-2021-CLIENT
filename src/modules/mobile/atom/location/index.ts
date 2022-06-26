import { atom } from "recoil";

export const FloorId = atom<number | undefined>({
  key: "FloorId",
  default: undefined,
});

export const LoactionId = atom<number | any>({
  key: "LoactionId",
  default: 1,
});
