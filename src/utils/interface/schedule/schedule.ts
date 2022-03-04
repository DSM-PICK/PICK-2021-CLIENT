export interface ScheduleListType {
  date: string;
  director: [
    {
      floor: number;
      name: string;
      teacher_id: string;
    }
  ];
  name: string;
  period: number;
}
