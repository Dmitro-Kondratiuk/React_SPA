
const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

let initial = {
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
                message:"What are you do in",
            },
        ],
        newMessageText : '',
    }

const dialogReducer = (state= initial,action)=> {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            let copyState = {...state}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessage);
            copyState.newMessageText = '';
            return copyState
        }
        case UPDATE_NEW_MESSAGE:
        {
            let copyState = {...state};
            copyState.newMessageText = action.newMessage;
            return copyState
        }
        default:
            return state
    }
}
export  const newMessageCreator = () =>{
    return {
        type : SEND_MESSAGE
    }
}
export const updateMessageCreator= (body) =>{
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage : body,
    }
}
export default dialogReducer;



