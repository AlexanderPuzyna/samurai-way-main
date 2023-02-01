export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes ) => void
}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW_POST-TEXT'
    newText: string

}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'This my first post', likesCount: 22}
            ],
            newPostText: 'Music'

        },
        dialogsPage: {
            messages: [
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
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }; //Создется новый пост
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''; //Для того чтобы при клике на кнопку Add Post из textarea пропал текст
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW_POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        }
    }


}


export default store;