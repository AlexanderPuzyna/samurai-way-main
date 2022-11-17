import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://www.ukinbound.org/wp-content/uploads/2020/07/We-Are-Tourism-BCP-875x350.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;