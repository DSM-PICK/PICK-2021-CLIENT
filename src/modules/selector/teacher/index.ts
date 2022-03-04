import { selector, selectorFamily } from "recoil";
import {
  StudentType,
  TeacherFloorType,
  TeacherInfoType,
  TeacherType,
} from "../../../utils/interface/teacher";
import request from "../../../utils/api/axios";
import teacher from "../../../utils/api/teacher";

export const teacherInfoSelector = selectorFamily<
  TeacherInfoType,
  string | null
>({
  key: "teacherInfoSelector/get",
  get: (id) => async () => {
    if (!id) return "";

    try {
      const res = await request(`/teacher/${id}/information`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const studentNameSelector = selectorFamily<
  StudentType[],
  string | undefined
>({
  key: "studentNameSelector/get",
  get: (name) => async () => {
    try {
      const res = await teacher.getStudentNameApi(name);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const teacherListSelector = selector<TeacherType[]>({
  key: "teacherListSelector/get",
  get: async () => {
    try {
      const res = await teacher.getTeacherListApi();
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
});

export const teacherSelector = selectorFamily<TeacherFloorType[], string>({
  key: "teacher/get",
  get: (date) => async () => {
    try {
      const res = await teacher.getTeacherApi(date);
      return res.data.teachers;
    } catch (e) {
      console.log(e);
    }
  },
});
