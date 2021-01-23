import React from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                <div className={s.item}>
                    <a href="/profile">Profie</a>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={s.item}>
                    <a href="/news">News</a>
                </div>
                <div className={s.item}>
                    <a href="/music">Music</a>
                </div>
                <div className={s.item}>
                    <a href="/settings">Settings</a>
                </div>
            </div>

            <div className={s.navFriends}>
                <h3>Friends</h3>
                <div>
                    <span className={s.iconFriends}><img src={props.state[1].avatar} /></span>
                    Den
                </div>
                <div>
                    <span className={s.iconFriends}></span>
                    Jeka
                </div>
                <div>
                    <span className={s.iconFriends}></span>
                    Sanya
                </div>
            </div>
        </nav>
    );
}
export default Navbar;