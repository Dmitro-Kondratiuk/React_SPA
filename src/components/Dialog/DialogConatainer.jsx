import {newMessageCreator, updateMessageCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return {
        state : state.dialogsPage,
        newMessageText : state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateMessage: (body) => {
                    dispatch(updateMessageCreator(body));
                 },
        onMessage: () => {
                     dispatch(newMessageCreator())
                 }
    }
}

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)

export default  DialogContainer;

