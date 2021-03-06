import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost:(newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;