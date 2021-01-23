import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {

    return <div className={s.meassage}>
        {props.message}
    </div>
}

export default Messages;