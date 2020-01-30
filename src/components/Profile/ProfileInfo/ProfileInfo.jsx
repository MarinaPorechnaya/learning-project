import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
            return <Preloader/>
    }
    return <div>
        <div className={s.profileImg}>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                 alt=''/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>{props.profile.aboutMe}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
}

export default ProfileInfo;