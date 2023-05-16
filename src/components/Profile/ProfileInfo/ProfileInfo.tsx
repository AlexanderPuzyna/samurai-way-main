import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props: any) => {
    if(!props.profile){
       return <Preloader/>
    }

    return (
        <div>

            <div>
                <img src='https://www.ukinbound.org/wp-content/uploads/2020/07/We-Are-Tourism-BCP-875x350.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>
                {props.profile.fullName}
                <div>{props.profile.aboutMe}</div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;