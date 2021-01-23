import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItems.module.css';

const DialogItems = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <div>
                <img src={props.avatar} />
            </div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;