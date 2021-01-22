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

let dialogsData = [
    {id: 1, name: 'Dmitrii'},
    {id: 2, name: 'Den'},
    {id: 3, name: 'Jeka'}
];

let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Yapp'}
];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
                <Message meassage={messageData[0].message} />
                <Message meassage={messageData[1].message} />
                <Message meassage={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;