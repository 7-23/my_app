import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.meassage}>
                {props.meassage}
            </div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dmitrii" id="1" />
                <DialogItem name="Den" id="2" />
                <DialogItem name="Jeka" id="3" />
            </div>
            <div className={s.messages}>
                <Message meassage="Hi" />
                <Message meassage="Yo" />
                <Message meassage="Yapp" />
            </div>
        </div>
    )
}

export default Dialogs;