import {connect} from "react-redux";
import {
    follow,
    ignore,
    setCurrentPage,
    followingState, getUsers
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";

class UsersContainerAPI extends  React.Component{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPage = (pageNumber)=>{
        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return <Users onPage={this.onPage}
                      ignore={this.props.ignore}
                      follow={this.props.follow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      isFetching={this.props.isFetching}
                      followingProgress={this.props.followingProgress}
                      followingState={this.props.followingState}
        />
    }
}

let  mapStateToProps=(state)=>{
    return {
        users: state.userPage.users,
        pageSize : state.userPage.pageSize,
        totalUsersCount : state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingProgress: state.userPage.followingProgress
    }
}

const UsersContainer = connect(mapStateToProps,
    {follow,ignore,
        setCurrentPage,
        followingState,getUsers
    })(UsersContainerAPI)


export default UsersContainer;