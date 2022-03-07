import { selectorFamily } from "recoil";
import { getSchedules } from "../../../../lib/api/desktop/Calendar";

export const CalendarSelector = selectorFamily<
  any,
  { year: number; month: number }
>({
  key: "calendar/get",
  get:
    ({ year, month }) =>
    async () => {
      try {
        const res = await getSchedules(year, month);
        return res;
      } catch (e) {
        console.log(e);
      }
    },
});
