import {addPostActionCreator} from "../../../redux/profile-reducer";
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
        addPost :(postText)=>{
            dispatch(addPostActionCreator(postText))
        }
    }
}

const InfoContainer = connect(mapStateToProps,mapDispatchToProps)(Info)

export default InfoContainer;