import React from 'react';
import s from './Sidebar.module.css';
import Navbar from "./Navbar/Navbar";
import Friendsbar from "./Friendsbar/Friendsbar";

const Sidebar = (props) => {
    return (
        <nav className={s.nav}>
            <Navbar />
            <Friendsbar />
        </nav>)
}

export default Sidebar;