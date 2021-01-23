let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s cool', likesCount: 11 }
        ]
        
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Dmitrii' },
            { id: 2, name: 'Den' },
            { id: 3, name: 'Jeka' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Yo' },
            { id: 3, message: 'Yapp' }
        ]
    }
};

export default state;