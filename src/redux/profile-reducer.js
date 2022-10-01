import {profileAPI} from "../api/profile-api";

const  ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const SET_USER = 'SET_USER'
const SET_STATUS = 'SET_STATUS'

let initial = {
        posts :[
            {
                id:1,
                name:'Dima',
                message:'Hello',
                likeCount:1,
            },
            {
                id:2,
                name:'Artem',
                message:'Пивет',
                likeCount:10,
            },
            {
                id:3,
                name:'Kirill',
                message:'Как дела',
                likeCount:7,
            },
            {
                id:4,
                name:'Sasha',
                message:'ывлптлвыт',
                likeCount:8,
            }
        ],
        newPostText: '',
        profile : null,
        status: "-------"
    }
const  profileReducer=(state=initial,action)=> {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: 'Egor',
                message: state.newPostText,
                likeCount: 4

            };
            let copyState = {...state}
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost);
            copyState.newPostText = ''
            return copyState
        }
        case   UPDATE_NEW_POST:{
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        }
        case SET_USER : {
            return {
                ...state,profile : action.profile
            }
        }
        case SET_STATUS : {
            return {
                ...state,
                status: action.status
            }
        }
        default :
            return state
    }
}

export const addPostActionCreator= () => ({type : ADD_POST})
export const setUser= (profile) => ({type : SET_USER,profile})
export const onPostChangeActionCreator = (text) => ({type : UPDATE_NEW_POST, newText: text})
export const setUserStatus = (status)=>({type : SET_STATUS, status})
export const getUserProfile=(userID)=>(dispatch)=>{
    profileAPI.profile(userID).then(data =>{
            dispatch(setUser(data));
        }
    )
}

export const getUserStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response))
        })
}
export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
}

export  default profileReducer;