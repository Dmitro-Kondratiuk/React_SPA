import * as axios from "axios";


let instance = axios.create({
    withCredentials : true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).
            then(response=>{
                return response.data;
            });
    },
    onPage(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response=>{
                return response.data;
    });
    }

}
