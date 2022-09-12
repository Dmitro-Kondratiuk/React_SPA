import * as axios from "axios";
let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true
})

export const authAPI = ({
    auth(){
        return instance.get('auth/me')
    }
})