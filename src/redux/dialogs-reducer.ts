import {PostType} from "./store";
import {DialogsPageType} from "./redux-store";
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type ActionsTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

let initialState:DialogsPageType = {
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
}

 const dialogsReducer = (state: DialogsPageType = initialState, action: any): DialogsPageType => {

     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body;
             return state;
         case  SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messages.push({id: 5, message: body});
             return state;
         default:
             return state;
     }
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

export default dialogsReducer;