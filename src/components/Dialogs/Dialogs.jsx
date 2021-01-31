import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} />);

    let messageElements = props.messages.map( m => <Messages message={m.message} />)

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea onChange={onNewMessageChange} ref={newMessageElement} value={props.newMessageBody}/>
                <button onClick={ onSendMessageClick }>
                    Add message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;