import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChage = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody = {onMessageChage} sendMessage = {onSendMessageClick} messages = {props.store.store.messagesPage.messages} dialogs = {props.store.store.messagesPage.dialogs} newMessageBody = {props.store.store.messagesPage.newMessageBody} />
    )
}

export default DialogsContainer;