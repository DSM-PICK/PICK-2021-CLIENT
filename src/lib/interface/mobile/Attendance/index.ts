// 출결 가져오기 출석 타입
export interface AttendanceType {
  schedule: string;
  location_name: string;
  class_name: string;
  head_name: string;
  student_list: StudentAttendanceType[];
}

export interface StudentAttendanceType {
  gcn: string;
  student_id: number;
  student_name: string;
  student_attendance: StudentAttendanceDetailType[];
}

export interface StudentAttendanceDetailType {
  period: number;
  location_name: string | null;
  state: string;
}

export interface AttendancePostType {
  state: string;
  term: string;
  student_id: number | null;
  name?: string;
  reason: string;
}

export interface directorType {
  id: string;
  floor: number;
}

// 출결 사전 변동 내역 리스트 타입
export interface AttendanceListType {
  attendance_id: number;
  director_id: number;
  gcn: string;
  name: string;
  period: number;
  reason: string;
  state: string;
  student_id: number;
  teacher_id: string;
  teacher_name: string;
  term: string;
}
