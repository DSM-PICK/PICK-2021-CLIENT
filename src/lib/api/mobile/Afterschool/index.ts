import instance from "../axios";

export const getAfterSchool = async () => {
    try{
        const request = await instance.get(`/after-school/list`)
        return request;
    }
    catch(err){
        return Promise.reject(err);
    }
}
export const getMajorClub = async () => {
    try{
        const request = await instance.get(`/major/list`)
        return request;
    }
    catch(err){
        return Promise.reject(err);
    }
}