import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://html5css.ru/css/img_lights.jpg" />
            </div>
            <div className={s.avatar}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />  + info
        </div>
            <div>
                My posts
          <div>
                    New post
          </div>
                <div>
                    <div>
                        post 1
            </div>
                    <div>
                        post 2
            </div>
                </div>
            </div>

        </div>
    );
}
export default Profile;