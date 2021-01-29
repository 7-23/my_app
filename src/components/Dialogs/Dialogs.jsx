import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} />);

    let messageElements = props.state.messages.map( m => <Messages message={m.message} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChage = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea onChange={onMessageChage} ref={newMessageElement} value={props.state.newMessageBody}/>
                <button onClick={ sendMessage }>
                    Add message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;