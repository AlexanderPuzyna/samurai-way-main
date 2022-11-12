import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;