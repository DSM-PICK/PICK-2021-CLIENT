import instance from "../Default"

export const getAtChangelist = async (token: string) => {
    try{
        const request = await instance.get('/attendance');
        return request;
    }
    catch(error){
        return Promise.reject(error);
    }
}