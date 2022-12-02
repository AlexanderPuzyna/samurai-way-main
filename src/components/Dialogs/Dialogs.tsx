import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {message} from "antd";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagesType} from "../../App";


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    state: any
}

const Dialogs = (props:DialogsPropsType) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElemetns = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElemetns}
            </div>
        </div>
    )
}


export default Dialogs;