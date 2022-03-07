import { postDataType } from "../../../interface/desktop/ATChange";
import instance, { request } from "../Default";

export const searchStudents = async (name: string) => {
  try {
    const req = await instance.get(`/teacher/student?name=${name}`);
    return req;
  } catch (error) {
    throw error;
  }
};

export const getAttendanceChangeList = async () => {
  try {
    const req = await instance.get("/attendance");
    return req;
  } catch (error) {
    throw error;
  }
};

export const postAttendanceChange = async (data: postDataType) => {
  const submitData = data;
  try {
    const req = await instance.post("/attendance", submitData);
    return req;
  } catch (error) {
    throw error;
  }
};

export const deleteAttendanceChange = async (id: number) => {
  try {
    const req = await instance.delete("/attendance");

    return req;
  } catch (error) {
    throw error;
  }
};
