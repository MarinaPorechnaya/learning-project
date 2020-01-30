import React from 'react'
import {connect} from 'react-redux'
import {
    follow, requestUsers, setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

class UsersConteiner extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} =  this.props
        this.props.requestUsers(currentPage, pageSize);
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            onPageChanged={this.onPageChanged}
        /></>
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
    export default connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, requestUsers
    })(UsersConteiner);