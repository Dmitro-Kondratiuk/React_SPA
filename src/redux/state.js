import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let store= {
    _state : {
        dialogsPage: {
            dialogs:[
                {
                    id:1,
                    name:"Dima",
                },
                {
                    id:2,
                    name:"Artem",
                },
                {
                    id:3,
                    name:"Sasha",
                },
                {
                    id:4,
                    name:"Vanya",
                },
                {
                    id:5,
                    name:"Danya",
                },
            ],
            messages :[
                {
                    id:1,
                    message:"Hello",
                },
                {
                    id:2,
                    message:"How are you",
                },
                {
                    id:3,
                    message:"What are you do",
                },
            ],
            newMessageText : '',
        },
        profilePage :{
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
            newPostText: ''
        }
    },
    subscribe(observer){
        this.renderTree = observer
    },
    renderTree(){
        console.log("ddddd")
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.dialogsPage = dialogReducer( this._state.dialogsPage,action)
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this.renderTree(this._state)
    }

}



export default store;
window.store  = store