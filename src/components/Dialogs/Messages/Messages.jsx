import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {

    return <div className={s.meassage}>
        <p>{props.message}</p>
    </div>
}

export default Messages;