import instance from "../axios";

export const patchPassword = async (password:string, teacher_id:string) => {
    try{
        const data = {
            new_password: password,
            teacher_id: teacher_id,
        }
        const request = await instance.patch(`/teacher/password`, data)
        return request;
    }
    catch(err){
        return Promise.reject(err)
    }
}