import instance from "../Default"

export const getUserInfo = async (teacher_id:string) => {
    try{
        const request = await instance.get(`/teacher/${teacher_id}/information`)
        return request;
    }
    catch(error){
        return Promise.reject(error);
    }
}