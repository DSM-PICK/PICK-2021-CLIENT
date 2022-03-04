export function DateChangeHook(date: string) {
  const data = date.split("-");
  return data[0] + "년 " + data[1] + "월 " + data[2] + "일";
}

export function DateNonYearHook(date: string) {
  const res = date.split("-");
  return res[0] + "월" + res[1] + "일";
}

export function DatePeriodHook(date: string) {
  const data = date?.split("T");
  const start = data?.[0]?.split("-");
  const end = data?.[1]?.split("-");

  return (
    start?.[1] +
    "월" +
    start?.[2] +
    "일  " +
    start?.[3] +
    "교시 ~ " +
    end?.[1] +
    "월 " +
    end?.[2] +
    "일 " +
    end?.[3] +
    "교시 "
  );
}
