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
                { id: 1, name: 'Dmitrii', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUPnIvTEoBZ_kjIuLl2OO-zlMZsCRFxWptQ&usqp=CAU"'},
                { id: 2, name: 'Den', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlWTEHQYhtXFkWHqAQOaQs2m3hqY78t4sNg&usqp=CAU' },
                { id: 3, name: 'Jeka', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw9Q7cEeqOOBgsn0fWAp-SaM0yxHtH0EneQ&usqp=CAU' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Yo' },
                { id: 3, message: 'Yapp' }
            ],
            newMessageText: 'samuray'
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed')
    },

    addPost() {
    
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0 
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText
        };
    
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber();
    },

    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber();
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;

window.store = store;