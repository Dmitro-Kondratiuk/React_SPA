import {newMessageCreator, updateMessageCreator} from "../../redux/dialog-reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state)=>{
    return {
        state : state.dialogsPage,
        newMessageText : state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {

        onMessage: (messageTest) => {
                     dispatch(newMessageCreator(messageTest))
                 }
    }
}


export default compose(connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialog);

