const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let body = {
            id: 4,
            message: state.newMessageBody
        };
        state.messages.push(body);
        state.newMessageBody = '';
        
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    
    }
    return state;
}

export default dialogsReducer;