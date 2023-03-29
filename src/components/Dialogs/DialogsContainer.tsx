import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {message} from "antd";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsPropsType = {
    store: StoreType

}


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

           return <Dialogs updateNewMessageBody={onNewMessageChange}
                           sendMessage={onSendMessageClick}
                           dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}


export default DialogsContainer;