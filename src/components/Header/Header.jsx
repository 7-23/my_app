import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://images.vectorhq.com/images/previews/20e/round-logo-psd-452270.png' />
            </div>
            <div className={s.mainWord}>
                <h1>Приложение</h1>
            </div>
        </header>
    );
}
export default Header;