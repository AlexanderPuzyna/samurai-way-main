import {PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ActionsTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>


 const profileReducer = (state: any, action: any) => {

     switch (action.type) {
         case ADD_POST:
             let newPost: PostType = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0
             }; //Создется новый пост
             state.posts.push(newPost);
             state.newPostText = ''; //Для того чтобы при клике на кнопку Add Post из textarea пропал текст
             return state;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state;
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

export default profileReducer;