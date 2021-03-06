// 출결 가져오기 출석 타입
export interface AttendanceType {
  schedule: string;
  location_name: string;
  class_name: string;
  head_name: string;
  period: number;
  student_list: StudentAttendanceType[];
}

export interface StudentAttendanceType {
  id: number;
  gcn: string;
  name: string;
  student_attendance: StudentAttendanceDetailType[];
}

export interface StudentAttendanceDetailType {
  id: number;
  period: number;
  location_name: string | null;
  state: string;
}

export interface AttendancePostType {
  state: string;
  student_id: number | null;
  reason: string;
  start_date: string;
  start_period: number | null;
  end_date: string;
  end_period: number | null;
  teacher_id?: any;
  location_id: number;

  name?: string;
}

export interface directorType {
  id: string;
  floor: number;
}

// 출결 사전 변동 내역 리스트 타입
export interface AttendanceListType {
  id: number;
  gcn: string;
  name: string;
  period: number;
  reason: string;
  state: string;
  student_id: number;
  teacher_id: string;
  teacher_name: string;
}
