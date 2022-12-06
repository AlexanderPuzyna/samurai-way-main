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

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'This my first post', likesCount: 22}
        ],

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
}

export let addPost = (postMessage: string) => {

    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
}

export default state;