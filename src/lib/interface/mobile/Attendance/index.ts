export interface AttendanceType {
  director_id: string;
  id: number;
  memo: string | null;
  period: string | null;
  reason: string;
  state: string;
  student_id: string;
  teacher_id: string;
  term: string;
}

export interface AttendancePostType {
  state: string;
  term: string;
  student_id: number | null;
  name?: string;
  reason: string;
}

export interface studentType {
  id: string;
  name: string;
  gcn: string;
  state: string;
}

export interface directorType {
  id: string;
  floor: number;
}
