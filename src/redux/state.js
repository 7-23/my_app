const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s cool', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'


        },
        messagesPage: {
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
    },

    _callSubscriber() {
        console.log('State changed')
    },



    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let body = {
                id: 4,
                message: this._state.messagesPage.newMessageBody
            };
            this._state.messagesPage.messages.push(body);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
        this._callSubscriber();
        }
    },
}

export const addPostActionCreator = () => ({
        type: ADD_POST
});

export const apdateNewPostTextActionCreator = (body) => ({
        type: UPDATE_NEW_POST_TEXT,
        body: body 
});

export const sendMessageActionCreator = () => ({
        type: SEND_MESSAGE
});

export const updateNewMessageBodyActionCreator = (body) => ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
});

export default store;

window.store = store;