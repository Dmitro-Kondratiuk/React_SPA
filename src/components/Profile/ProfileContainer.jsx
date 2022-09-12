import React from "react";
import {connect} from "react-redux";
import {setUser} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {profileAPI} from "../../api/profile-api";

class ProfileContainerAPI extends React.Component{
    componentDidMount() {
        let userID = this.props.router.params.userID
        profileAPI.profile(userID).then(data =>{
                this.props.setUser(data);
            }
        )

  }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state)=>{
    return {
        profile : state.profilePage.profile
    }
}
function withRouter(ProfileContainerAPI){
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

const ProfileContainer= connect(mapStateToProps,{setUser})(withRouter(ProfileContainerAPI));

export default ProfileContainer;