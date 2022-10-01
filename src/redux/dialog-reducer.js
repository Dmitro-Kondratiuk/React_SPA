const SEND_MESSAGE = "SEND_MESSAGE"

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

    }

const dialogReducer = (state= initial,action)=> {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: action.messageTest,
            }
            let copyState = {...state}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessage);
            return copyState
        }
        default:
            return state
    }
}
export  const newMessageCreator = (messageTest) =>({type : SEND_MESSAGE,messageTest})

export default dialogReducer;



