import instance from "../Default";

export const getSchedules = async (year : number, month : number) => {
  try {
    const request = await instance.get(`/schedule/list/${year}/${month + 1}`);
    return request;
  } catch (error) {
    throw error;
  }
};
