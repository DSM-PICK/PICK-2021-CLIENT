import { atom } from "recoil";
import moment from "moment";

export const date = atom<moment.Moment>({
  key: "date",
  default: moment(),
});

export const dateValue = atom<string>({
  key: "dateValue",
  default: moment().format("YYYY-MM-DD"),
});

export const scheduleState = atom<"SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL">({
  key: "scheduleState",
  default: "SELF_STUDY",
});

export const startDateValue = atom<moment.Moment>({
  key: "startDateValue",
  default: moment(),
});

export const endDateValue = atom<moment.Moment>({
  key: "endDateValue",
  default: moment(),
});

export const calendarModal = atom<boolean>({
  key: "calendarModal",
  default: false,
});

export const calendarEndModal = atom<boolean>({
  key: "calendarEndModal",
  default: false,
});
