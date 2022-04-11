export interface AttendanceType {
  id: number;
  attendance_id: number;
  director_id: number;
  period: string | null;
  reason: string;
  state: string;
  name: string;
  gcn: number;
  teacher_id: string;
  teacher_name: string;
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
