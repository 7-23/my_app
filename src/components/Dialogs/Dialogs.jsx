import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} />);

    let messageElements = props.state.messages.map( m => <Messages message={m.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea onChange={onMessageChage} ref={newMessageElement} value={props.state.newMessageText}/>
                <button onClick={ addMessage }>
                    Add message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;