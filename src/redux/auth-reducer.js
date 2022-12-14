import {authAPI} from "../api/auth-api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState ={
    email : null,
    id : null,
    login:null,
    isAuth : false
}

const authReducer = (state = initialState,action)=>{
        switch (action.type) {
            case SET_USER_DATA :

                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
            default:
                return state;
        }
}

export const setUserData = (id,email,login)=> ({type:SET_USER_DATA,data:{id,email,login}})



export const autologin =()=> (dispach) => {
        authAPI.auth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispach(setUserData(id, email, login));
            }
        })
    }

export default authReducer;