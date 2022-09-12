import {userAPI} from "../api/user-api";
import {followAPI} from "../api/follow-api";

const FOLLOW ='FOLLOW'
const IGNORE = 'IGNORE'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT ='SET_TOTAL_USER_COUNT'
const SHOW_PRELOADER = 'SHOW_PRELOADER'
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

let initial  = {
    users :[],
    pageSize : 20,
    totalUsersCount : 20,
    currentPage : 1,
    isFetching : false,
    followingProgress : []
}
const usersReducer = (state=initial,action) =>{
    switch (action.type){
        case FOLLOW:
           return {
                ...state,
               users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case IGNORE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,users:action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,currentPage:action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,totalUsersCount:action.totalCount
            }
        case SHOW_PRELOADER :
            return {
                ...state,isFetching:action.isFetching
            }
        case FOLLOWING_PROGRESS :
            return {
                ...state,followingProgress:
                    action.isFetching
                        ? [...state.followingProgress,action.userId]
                        : [state.followingProgress.filter(id => id !== action.userID)]
            }
        default:
            return state
    }
}

export  const followSuccess =(userId) =>({type:FOLLOW,userId})
export const ignoresdSuccess =(userId) => ({type:IGNORE,userId})
export const setUsers =(users) => ({type:SET_USERS,users})
export const setCurrentPage =(currentPage) => ({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCount =(totalUsersCount) => ({type:SET_TOTAL_USER_COUNT,totalCount:totalUsersCount})
export const showPreloader=(isFetching)=>({type:SHOW_PRELOADER,isFetching})
export const followingState=(isFetching,userId)=>({type:FOLLOWING_PROGRESS,isFetching,userId})

export const getUsers=(currentPage,pageSize)=> {
   return (dispach) => {
        dispach(showPreloader(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
                dispach(setUsers(data.items));
                dispach(setTotalUsersCount(data.totalCount));
                dispach(showPreloader(false));
            }
        )
    }
}
export const follow=(userId)=> {
    return (dispach) => {
        dispach(followingState(true,userId))
        followAPI.follow(userId).then(response =>{
                dispach(followSuccess(userId))
                dispach(followingState(false,userId))
            }
        )
    }
}
export const ignore=(userId)=> {
    return (dispach) => {
        dispach(followingState(true,userId))
        followAPI.ignore(userId).then(response =>{
                dispach(ignoresdSuccess(userId))
                dispach(followingState(false,userId))
            }
        )
    }
}


export default usersReducer;