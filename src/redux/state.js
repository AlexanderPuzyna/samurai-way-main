

const state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'This my first post',likesCount: 22}
        ],

    },
    dialogsPage: {
        messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'What are you doing?'},
            {id: 3, message: 'Nice!'},
            {id: 4, message: 'Ok'}
        ],
        dialogs: [
            {id: 1, name: 'Alexander'},
            {id: 2, name: 'Maxim'},
            {id: 3, name: 'Alexandra'},
            {id: 4, name: 'Yana'},
        ]
    },
    sidebar: {}


}

export default state;