
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Info from "./Info";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        onPostChange :(text)=>{
            dispatch(onPostChangeActionCreator(text))

        },
        addPost :()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const InfoContainer = connect(mapStateToProps,mapDispatchToProps)(Info)

export default InfoContainer;