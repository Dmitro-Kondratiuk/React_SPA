import * as axios from "axios";
let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true,
})

export const profileAPI = ({
    profile(userID){
       return instance.get(`profile/${userID}`).then(response =>{return response.data})
    }
})