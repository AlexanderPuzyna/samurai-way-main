const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof setUserProfile>

export type PostType = {
    id: number
    message: string
    likesCount: number
}

// export type PhotosType = {
//     small: string
//     large: string
// }
//
// export type ProfileType = {
//     fullName: string
//     photos: PhotosType
// }

export type InitialStateType = {
    posts:Array<PostType>
    newPostText: string
    profile: null
}



let initialState:InitialStateType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'This my first post', likesCount: 22}
        ],
        newPostText: 'Music',
        profile: null
    }

 const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

     switch (action.type) {
         case ADD_POST: {
             let newPost: PostType = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             }; //Создется новый пост
             let stateCopy = {
                 ...state,
                 posts: [...state.posts, newPost],
                 newPostText: '' //Для того чтобы при клике на кнопку Add Post из textarea пропал текст
             };
             return stateCopy;
         }
         case UPDATE_NEW_POST_TEXT: {
             return {
                 ...state,
                 newPostText: action.newText
             };
         }
         case SET_USER_PROFILE:{
             return {
                 ...state,
                 profile: action.profile
             }
         }

         default:
             return state;
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

export const setUserProfile = (profile: null ) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export default profileReducer;