/* eslint-disable import/no-anonymous-default-export */
import request from "../axios";

export default {
  postLoginApi(id: string, password: string) {
    return request({
      url: "/teacher/login",
      method: "post",
      data: {
        id,
        password,
      },
    });
  },
  getInfomationApi(id: string) {
    return request({
      url: `/teacher/${id}/information`,
    });
  },
  getStudentNameApi(name: string | undefined) {
    return request({
      url: `/teacher/student?name=${name}`,
    });
  },
  getTeacherListApi() {
    return request({
      url: "/teacher/list",
    });
  },
  getTeacherApi(date: string) {
    return request({
      url: `/teacher/${date}`,
    });
  },
};
