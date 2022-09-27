import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";



class ProfileContainerAPI extends React.Component{
    componentDidMount() {
        let userID = this.props.router.params.userID
        if(userID==null){
            userID = 2
        }
        this.props.getUserProfile(userID);

  }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }

}

let mapStateToProps = (state)=>{
    return {
        profile : state.profilePage.profile,
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainerAPI)
function withRouter(AuthRedirectComponent){
    function ProfileContainerAPIPops(props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams()
        return(<ProfileContainerAPI
            {...props}
            router={{ location, navigate, params }} />)
    }
    return ProfileContainerAPIPops
}

const ProfileContainer= connect(mapStateToProps,{getUserProfile})(withRouter(AuthRedirectComponent));

export default ProfileContainer;