import {newMessageCreator, updateMessageCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

let mapStateToProps =(state)=>{
    return {
        state : state.dialogsPage,
        newMessageText : state.dialogsPage.newMessageText,
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
let AuthRedirectComponent = withAuthRedirect(Dialog)
const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default  DialogContainer;

