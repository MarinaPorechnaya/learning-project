import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profilePage";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.authorisedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render () {

        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus} />

    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter/*,
    withAuthRedirect*/)
(ProfileContainer)
