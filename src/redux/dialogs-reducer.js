const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dmitrii', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUPnIvTEoBZ_kjIuLl2OO-zlMZsCRFxWptQ&usqp=CAU"' },
        { id: 2, name: 'Den', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlWTEHQYhtXFkWHqAQOaQs2m3hqY78t4sNg&usqp=CAU' },
        { id: 3, name: 'Jeka', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw9Q7cEeqOOBgsn0fWAp-SaM0yxHtH0EneQ&usqp=CAU' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Yapp' }
    ],
    newMessageBody: 'samuray'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = {
                id: 4,
                message: state.newMessageBody
            };
            state.messages.push(body);
            state.newMessageBody = '';
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default: return state;
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;