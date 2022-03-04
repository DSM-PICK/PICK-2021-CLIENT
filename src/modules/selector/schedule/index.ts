import { selectorFamily } from "recoil";
import schedule from "../../../utils/api/schedule/scheduleApi";
import { ScheduleListType } from "../../../utils/interface/schedule/schedule";

export const scheduleDateSelector = selectorFamily<
  { name: "SELF_STUDY" | "MAJOR" | "AFTER_SCHOOL" },
  string
>({
  key: "scheduleDateSelector/get",
  get: (date: string) => async () => {
    try {
      const res = await schedule.getScheduleDate(date);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const scheduleListMonthSelector = selectorFamily<
  ScheduleListType[],
  { year: string; month: string }
>({
  key: "scheduleListMonthSelector/get",
  get:
    ({ year, month }) =>
    async () => {
      try {
        const res = await schedule.getScheduleListMonth(year, month);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
});
