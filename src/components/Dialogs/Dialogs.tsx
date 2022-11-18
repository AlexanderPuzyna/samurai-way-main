import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {message} from "antd";

export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessagePropsType> = (props) => {

    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Alexandra'},
        {id: 4, name: 'Yana'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Nice!'},
        {id: 4, message: 'Ok'}
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElemetns = messages.map(m => <Message message={m.message}/>)

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