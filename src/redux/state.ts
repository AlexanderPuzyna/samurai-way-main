const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
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
    newMessageBody: string

}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>| ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

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
            ],
            newMessageBody: ''
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }; //Создется новый пост
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''; //Для того чтобы при клике на кнопку Add Post из textarea пропал текст
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber()
        }
    }


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}


export default store;