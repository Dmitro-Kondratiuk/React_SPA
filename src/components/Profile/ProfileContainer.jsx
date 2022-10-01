import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {getUserProfile,getUserStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainerAPI extends React.Component{
    componentDidMount() {
        let userID = this.props.router.params.userID
        if(!userID){
            userID = 25588
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
  }

    render(){
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
        )
    }

}

let mapStateToProps = (state)=>{
    return {
        profile : state.profilePage.profile,
        status: state.profilePage.status
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

export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus}),
    withRouter,
    withAuthRedirect
)(withRouter(AuthRedirectComponent));