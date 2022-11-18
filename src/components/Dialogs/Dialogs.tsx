import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

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

    let dialogsData = [
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Maxim'},
        {id: 3, name: 'Alexandra'},
        {id: 4, name: 'Yana'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Nice!'},
        {id: 4, message: 'Ok'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>

            </div>
        </div>
    )
}


export default Dialogs;