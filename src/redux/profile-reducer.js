const  ADD_POST = "ADD_POST"
const UPDATE_NEW_POST = "UPDATE_NEW_POST"
const SET_USER = 'SET_USER'

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
        profile : null
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
        default :
            return state
    }
}

export const addPostActionCreator= () => ({type : ADD_POST})
export const setUser= (profile) => ({type : SET_USER,profile})
export const onPostChangeActionCreator = (text) => ({type : UPDATE_NEW_POST, newText: text})

export  default profileReducer;