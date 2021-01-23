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

    let dialogs = [
        { id: 1, name: 'Dmitrii' },
        { id: 2, name: 'Den' },
        { id: 3, name: 'Jeka' }
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Yapp' }
    ];

    let messageElements = messages.map(
        m => <Message meassage={m.message} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;