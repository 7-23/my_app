let initialState = ({
        dialogs: [
            { id: 1, name: 'Dmitrii', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUPnIvTEoBZ_kjIuLl2OO-zlMZsCRFxWptQ&usqp=CAU"' },
            { id: 2, name: 'Den', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlWTEHQYhtXFkWHqAQOaQs2m3hqY78t4sNg&usqp=CAU' },
            { id: 3, name: 'Jeka', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyw9Q7cEeqOOBgsn0fWAp-SaM0yxHtH0EneQ&usqp=CAU' }
        ]
});

export const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarbarReducer;