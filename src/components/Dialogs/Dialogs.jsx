import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id} avatar={d.avatar} />);

    let messageElements = props.state.messages.map( m => <Messages message={m.message} />)

    let newMessageElement = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <textarea ref={newMessageElement}>

                </textarea>
                <button onClick={ newMessage }>
                    New message
                </button>
            </div>
        </div>
    )
}

export default Dialogs;