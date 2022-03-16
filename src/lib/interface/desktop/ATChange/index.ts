export interface SelectedStudentsType {
  id: number;
  gcn: number;
  name: string;
}

export interface StudentObjectType {
  id: number;
  gcn: number;
  name: string;
  sdate: string;
  fdate: string;
  sclass: string;
  fclass: string;
  type: number;
  reason: string;
  teacher_id: string | null;
}

export interface postDataType {
  state: string;
  term: string;
  student_id: number;
  reason: string;
  teacher_id: string | null;
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
