import instance from "../Default";

export const getSchedule = async (date:string) => {
    try{
        const request = await instance.get(`/schedule/${date}`)
        return request;
    }
    catch(err){
        return Promise.reject(err);
    }
}