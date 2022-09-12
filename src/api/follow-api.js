import * as axios from "axios";
let instanse = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true,
    headers:{
        "API-KEY":"be7d145d-2777-4660-afbd-59b88fb2d493"
    }
})

export const followAPI = ({
    follow(userId){
       return  instanse.post(`follow/${userId}`).
       then(response =>{return response})
    },
    ignore(userId){
        return instanse.delete(`follow/${userId}`).
            then(response =>{return response})
    }
})