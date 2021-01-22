import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className="ProfileInfo">
            <div className={s.content}>
                <img src="https://html5css.ru/css/img_lights.jpg" />
            </div>
            <div className={s.avatar}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />  + info
            </div>
        </div>
    );
}
export default Profile;