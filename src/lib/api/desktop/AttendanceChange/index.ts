import { postDataType } from "../../../interface/desktop/ATChange";
import instance from "../Default";

export const searchStudents = async (name: string) => {
  try {
    const req = await instance.get(`/teacher/student?name=${name}`);
    return req;
  } catch (error) {
    throw error;
  }
};

export const getAttendanceChangeList = async (floor: number) => {
  try {
    const req = await instance.get(`/attendance/today?floor=${floor}`);
    return req;
  } catch (error) {
    throw error;
  }
};

export const postAttendanceChange = async (data: postDataType) => {
  try {
    const req = await instance.post("/attendance", data, {
      params: {
        floor: 2,
      },
    });
    return req;
  } catch (error) {
    throw error;
  }
};

export const deleteAttendanceChange = async (id: number) => {
  try {
    const req = await instance.delete(`/attendance/${id}`);
    return req;
  } catch (error) {
    throw error;
  }
};
