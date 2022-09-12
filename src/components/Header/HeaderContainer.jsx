import React from "react";
import Header from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/auth-api";


class HeaderContainer extends  React.Component {
    componentDidMount() {
        authAPI.auth().then(response=> {
            if(response.data.resultCode ===0){
                let {id,email,login} = response.data.data
                this.props.setUserData(id,email,login);
            }
    })
    };

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
    login : state.auth.login
})
export default connect(mapStateToProps,{setUserData})(HeaderContainer)