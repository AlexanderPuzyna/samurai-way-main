import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active }>
                    Alexander
                </div>
                <div className={s.dialog}>
                    Maxim
                </div>
                <div className={s.dialog}>
                    Alexandra
                </div>
                <div className={s.dialog}>
                    Yana
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