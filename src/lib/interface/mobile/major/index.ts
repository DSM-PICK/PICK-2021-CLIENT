export interface MajorListType {
  major_id: number;
  major_name: string;
  location_name: string;
  head_name: string;
}

export interface MajorDetailType {
  major_name: string;
  count: number;
  head_name: string;
  teacher_name: string;
  location_name: string;
  members: MemberType[];
}

export interface MemberType {
  id: any;
  student_id: number;
  student_name: string;
  gcn: string;
}
