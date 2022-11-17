import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: string
}

export type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessagePropsType) => {

    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Alexander" id="1"/>
                <DialogItem name="Maxim" id="2"/>
                <DialogItem name="Alexandra" id="3"/>
                <DialogItem name="Yana" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='What are you doing?'/>
                <Message message='Nice!'/>
                <Message message='Ok'/>
            </div>
        </div>
    )
}

export default Dialogs;