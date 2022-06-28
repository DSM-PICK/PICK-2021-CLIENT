import instance from "../Default";

export const getAtCheck = async (location_id:number, date:string) => {
    try{
        const request = await instance.get(`/attendance/${location_id}?date=${date}`)
        return request;
    }
    catch(err){
        return Promise.reject(err);
    }
}