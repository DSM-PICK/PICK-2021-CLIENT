export function DatePeriodChangeHook(date: any) {
    const { startDate, startPeriod, endDate, endPeriod } = date;
    return startDate + "-" + startPeriod + "T" + endDate + "-" + endPeriod;
  }
  