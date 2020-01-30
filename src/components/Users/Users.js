import React from 'react'
import s from './users.module.css'
import UserPhoto from '../../img/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator/Paginator";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
            return <div>
            <Paginator currentPage={currentPage}  onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {
                users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={(u.photos.small !== null) ? u.photos.small : UserPhoto}
                                  className={s.photo}/>
                            </NavLink>
                        </div>
                        <div>{u.followed
                            ? <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                                props.follow(u.id);
                            }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    }

export default Users;