import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active }>
                    <NavLink to='/dialogs/1'>Alexander</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Maxim</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Alexandra</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Yana</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>What are you doing?</div>
                <div className={s.dialog}>Nice!</div>
                <div className={s.dialog}>Ok</div>
            </div>
        </div>
    )
}

export default Dialogs;