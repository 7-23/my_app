import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarbarReducer from "./navbar-reducer";

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
        },
        navbarState: {
            friends: [
                { id: 1, name: 'Dmitrii', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUPnIvTEoBZ_kjIuLl2OO-zlMZsCRFxWptQ&usqp=CAU"' },
                { id: 2, name: 'Den', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlWTEHQYhtXFkWHqAQOaQs2m3hqY78t4sNg&usqp=CAU' },
                { id: 3, name: 'Jeka', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw9Q7cEeqOOBgsn0fWAp-SaM0yxHtH0EneQ&usqp=CAU' }
            ]

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
        debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navbarState = navbarReducer(this._state.navbarState, action);
        this._callSubscriber();

    }
}

export default store;

window.store = store;