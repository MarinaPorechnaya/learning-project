import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img
                src='https://avatars.mds.yandex.net/get-pdb-preview/1661566/0dd9618a-dea0-4253-9645-313bb1da1c87/orig'/>
            {props.message}
            <div><span>{props.likesCount} like</span></div>
        </div>
)
}

export default Post;