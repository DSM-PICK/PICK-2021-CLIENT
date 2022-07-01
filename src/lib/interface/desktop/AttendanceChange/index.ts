export interface SelectedStudentsType {
  id: number;
  gcn: number;
  name: string;
}

export interface StudentObjectType {
  id: number;
  gcn: number;
  name: string;
  start_date: string;
  end_date: string;
  start_period: string;
  end_period: string;
  type: number;
  reason: string;
  teacher_id: string | null;
}

export interface postDataType {
  reason: string;
  state: string;
  student_id: number;
  teacher_id: string;
  start_date: string;
  end_date: string;
  start_period: number;
  end_period: number;
  location_id: 2 | 3 | 4;
}

export interface StudentListDataType {
  director_id: string;
  id: number;
  memo: string;
  period: string;
  reason: string;
  state: string;
  student_id: string;
  teacher_id: string;
  term: string;
  name: string;
}
