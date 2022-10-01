import * as axios from "axios";
let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials : true,
    headers:{
        "API-KEY":"be7d145d-2777-4660-afbd-59b88fb2d493"
    }
})

export const profileAPI = ({
    me(){
    return instance.get(`profile/25588`).then(response=>{return response.data})
},

    profile(userID){
       return instance.get(`profile/${userID}`).then(response =>{return response.data})
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(){
        return instance.put(`profile/status`,{
            // eslint-disable-next-line no-restricted-globals
            status})
            .then(response =>{ return response.data})
    }
})