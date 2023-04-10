const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type ActionsTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type InitialStateType = typeof initialState

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Nice!'},
        {id: 4, message: 'Ok'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Alexandra'},
        {id: 4, name: 'Yana'},
    ] as Array<DialogType>,
    newMessageBody: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
            }
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