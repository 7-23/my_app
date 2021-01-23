import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.topfon}>
                <img src="https://html5css.ru/css/img_lights.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionAva}>
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
                </div>
                <p>badfjaerhfijaewkrjbfhaehroivghaslevfuihaseehfvfhjsagejfgweuisdfgljkqwpeuyh
                q3r.vftwadfghjsertghekjrgjkwe g
                    nerbgn e5ntbhh e5 nhe5 gbfauwvgu bmwiseuvgkjwebe5g e4jrgfyavb qnw4g</p>
            </div>
        </div>
    );
}
export default ProfileInfo;