import React from 'react';
import s from './Friendsbar.module.css';
import Post from "../../Profile/MyPosts/Post/Post";

const Friendsbar = () => {

    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friend}>
                <div className={s.item}>
                    <img
                        src=''/>
                </div>
                <span>Marina</span>
            </div>

        </div>)
}

export default Friendsbar;